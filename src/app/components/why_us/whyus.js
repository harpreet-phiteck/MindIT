import './whyus.css';
import List from './list';
export default function Why_us(){
    const list_data1 = [
        'Sincere, experienced and dedicated team',
        'Use of latest and flexible Agile development model',
        'UI/UX expertise, building user friendly applications',
        'Quality standards & adherence to best coding guidelines',
        'Proper use of patterns on frontend, unified code style for JavaScript, clean code and APIs'
    ]
    const list_data2 = [
        'Supple engagement models – fixed cost, part-time hiring, full-time hiring, etc.',
        'QA, Presentation, load & stress testing before delivery',
        'Scalable infrastructure support for your business necessities',
        'Use of Version Control Systems to manage and document changes to source code over time.'

    ]   

    return (
        <section className="WhyUs_section">
            <div className="WhyUs_container">
                <div className='WhyUs_content_wrapper'>

                
            <div className="WhyUs_heading_container">
                <h2>Why <span>Us</span>?</h2>
            </div>
            <div className="WhyUs_description_container">
                <p>We work with commitment and on-time delivery. With us, you can leverage from the following benefits</p>
            </div>
            <div className="WhyUs_list_container">
                <ul>
                  {
                    list_data1.map((list,index)=>{
                            return <List data={{list_data:list_data1[index]}} /> 
                    })
                  } 
                </ul>
                <ul>
                  {
                    list_data2.map((list,index)=>{
                            return <List data={{list_data:list_data1[index]}} /> 
                    })
                  } 
                </ul>
                </div>
            </div>
            <div className='WhyUs_form_wrapper'>
                    
            </div>
            </div>
        </section>
    )
}