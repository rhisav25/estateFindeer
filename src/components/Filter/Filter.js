import React, {useState, useEffect} from 'react'
import './Filter.css';
import {Paper} from '@mui/material'
import PropertyDetails from "../Property-details/PropertyDetails"
import {FormControl, InputLabel, Select, MenuItem} from '@mui/material'
export default function Filter(props) {

    const [price, setPrice] = useState(50000)
    const [type, setType] = useState('All')
    const [when, setWhen]  = useState('All')
    const [location,setlocation]=useState('');
    const properties = PropertyDetails;
    const { setDetails } = props;
    
    useEffect(() => {
        let newproperties=[];
        for(let i=0;i<properties.length;i++){
            let e=properties[i];
            if(e.amount<=price && (type==='All'?e:e.type===type)&& (when==='All' ? e: e.when===when)){
                
                let loc=e.location;
                let sellocation=location;
                if(sellocation===''){
                    newproperties.push(properties[i]);
                    continue;
                }
                sellocation=sellocation.toLowerCase();
                loc=loc.toLowerCase();
                console.log(sellocation + location);
                if(loc.includes(sellocation)){
                    newproperties.push(properties[i]);
                }
            }
        }
        setDetails(newproperties);
    //    setDetails(properties.filter((e) => {
     //       return (e.amount<=price && (type === 'All' ? e : e.type === type) && (when === 'All' ? e : e.when === when) )
    //s    }))
    
    }, [price, type, when,location])

    const handlePriceChange = (event) => {
        setPrice(event.target.value)
    }


    const handleTypeChange = (event) => {
        setType(event.target.value)
    }

    const handleWhenChange = (event) => {
        setWhen(event.target.value)
    }

    return ( 
    <>
    <Paper elevation={8} sx={{borderRadius: '1em'}} className="filter-wrapper">
        <div className="when-wrapper">
        <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">When</InputLabel>
                    <Select sx={{height: '3em'}}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={when}
                        label="When"
                        onChange={handleWhenChange}
                    >
                    <MenuItem value={'All'}>All</MenuItem>
                    <MenuItem value={'1 month'}>1 month</MenuItem>
                    <MenuItem value={'2 months'}>2 months</MenuItem>
                    <MenuItem value={'3 months'}>3 months</MenuItem>
                </Select>
            </FormControl>
       
       </div>
       
        <div className="price-wrapper">
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Price</InputLabel>
                    <Select sx={{height: '3em'}}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        defaultValue={price}
                        label="Price"
                        onChange={handlePriceChange}
                    >
                    <MenuItem value={50000}>All</MenuItem>
                    <MenuItem value={30000}>below 30000</MenuItem>
                    <MenuItem value={20000}>below 20000</MenuItem>
                    <MenuItem value={10000}>below 10000</MenuItem>
                </Select>
            </FormControl>
        </div>
        <div className="propertyType-wrapper">
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">PropertyType</InputLabel>
                    <Select sx={{height: '3em'}}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={type}
                        label="PropertyType"
                        onChange={handleTypeChange}
                    >
                    <MenuItem value={'All'}>All</MenuItem>
                    <MenuItem value={'Villa'}>Villa</MenuItem>
                    <MenuItem value={'2-BHK'}>2-BHK</MenuItem>
                    <MenuItem value={'3-BHK'}>3-BHK</MenuItem>
                </Select>
            </FormControl>
        </div>
        <div className='propertyLocation'>
            <input type='text' onChange={(e)=>setlocation(e.target.value)} placeholder='Enter Location'>
            </input>
        </div>
    </Paper>
       
    </>
    )
}