import "./style.scss"

import {cities} from "../../Data/Cities"

function Cities(props:any) {
    return (
        <div className="cities-block">
            {cities.map(c => {
                return (
                    <a 
                        href="#" 
                        className={`city ${props.currentCity === c.id ? 'active' : ''}`
                        }
                        onClick={() => {
                            props.onChange(c.id)
                        }}
                    >
                        {c.city}
                    </a>
                )
            })}
        </div>
    )
}

export default Cities;