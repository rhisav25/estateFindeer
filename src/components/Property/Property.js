import React,{Fragment,useState} from 'react'
import Filter from '../Filter/Filter';
import PropertyDetails from "../Property-details/PropertyDetails"
import SearchBar from '../SearchBar/Search'
import './Property.css';
const Property = () => {

    const [detail,setDetails] = useState(PropertyDetails)

    return(
        <Fragment>
            <SearchBar setDetails={setDetails}/>
            <Filter setDetails={setDetails}/>
            <section className="property">
               <div className="row">
                   {
                       detail.map((detail)=>{
                           return(
                         <div className="column">
                            <div className="single-property">  
                            <div className="card">

                                <div className="property-thumb">
                                    <div className="property-tag">For rent</div>
                                    <img src={detail.Image} alt="Villa for Rent"/>
                                </div>

                                <div className="property-content"> 
                                    <h3>{detail.heading}</h3>
                                   
                                    <span className="amount">{detail.amount}</span>
                                </div>  
                                <div className="property-footer">
                                    <ul>
                                        <li>
                                            <span>{detail.type}</span>
                                        </li>
                                        <li>
                                            <span>{detail.bath}</span>
                                        </li>
                                        <li>
                                            <span>{detail.size}</span>
                                        </li>
                                        <li>
                                            <span>{detail.location}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            </div>
                        </div>

                           )
                       })  
                   }
                     
               </div>
               <div className="more-property">
                   <a href="#" className="property-btn">Back to Top</a>
               </div>
            </section>
        </Fragment>

    )

}

export default Property;