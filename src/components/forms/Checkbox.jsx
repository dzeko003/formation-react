export function Checkbox({checked , onChange , label , id}){

    return (
        <div className="form-chek">
            <input 
                id={id}
                type="checkbox"
                className="form-check-input"
                checked = {checked}
                onChange={(e) => onChange(e.target.checked)} />
                <label htmlFor={1} className="form-check-label">{label}</label>


        </div>
    )

}