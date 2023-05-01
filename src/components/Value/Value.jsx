import React, { useState } from 'react'

import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemButton, AccordionItemState } from 'react-accessible-accordion'
import 'react-accessible-accordion/dist/fancy-example.css';
import {MdOutlineArrowDropDown} from 'react-icons/md';
import './Value.css';
import data from '../../utils/accordion';
const Value = () => {
  return (
    <section className="v-wrapper">
        <div className="paddings innerWidth flexCenter v-container">
            {/* left side  */}
            <div className="v-left">
                <div className="image-container">
                    <img src='./value.png' alt="value"/>
                </div>
            </div>
            {/* right side */}
            <div className="flexColStart right-side">
                <span className='orangeText'>Our Value</span>
                <span className='primaryText'>Value We Give To You</span>
                <span className='secondaryText'>We are always ready to provide best services for you
                    <br/>
                    We believe a good balance to live can make your life better 
                </span>

                <Accordion 
                className='accordion'
                allowMultipleExpanded={false}
                preExpanded={[0]}
                >
                    {
                        data.map((item,i)=>{
                            const [className,setClassName] = useState(null);
                            return(
                                <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton className='flexCenter accordionButton'>
                                            <AccordionItemState>
                                                {({expanded})=> expanded ? setClassName('expanded'):setClassName('collapsed')}
                                            </AccordionItemState>
                                            <div className="flexCenter icon">{item.icon}</div>
                                            <div className="primaryText">{item.heading}</div>
                                            <div className="flexCenter icon"><MdOutlineArrowDropDown size={20}/></div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>{item.detail}</AccordionItemPanel>
                                </AccordionItem>
                            )
                        })
                    }

                </Accordion>
            </div>
        </div>
    </section>
  )
}

export default Value