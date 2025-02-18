const GenderCheckBox = ({ onCheckBoxChange, selectedGender }) => {
    return ( 
        <div className="flex">
            <div className="form-control">
                <label className={`gap-2 cursor-pointer label ${selectedGender === "male" ? "selected" : ""}`}>
                    <span className="label-text">Male</span>
                    <input type="checkbox" className="checkbox border-slate-900" 
                        checked={ selectedGender === "male"}
                        onChange={() => onCheckBoxChange("male")}
                    />
                </label>
            </div>
            <div className="form-control">
                <label className={`gap-2 cursor-pointer label ${selectedGender === "female" ? "selected" : ""}`}>
                    <span className="label-text">Female</span>
                    <input type="checkbox" className="checkbox border-slate-900" 
                        checked={ selectedGender === "female"}
                        onChange={() => onCheckBoxChange("female")}
                    />
                </label>
            </div>
        </div>

    );
}
 
export default GenderCheckBox;

//STARTER CODE FOR THE SIGNUP COMPONENT.

// const GenderCheckBox = () => {
//     return ( 
//         <div className="flex">
//             <div className="form-control">
//                 <label className={`gap-2 cursor-pointer label`}>
//                     <span className="label-text">Male</span>
//                     <input type="checkbox" className="checkbox border-slate-900" />
//                 </label>
//             </div>
//             <div className="form-control">
//                 <label className={`gap-2 cursor-pointer label`}>
//                     <span className="label-text">Female</span>
//                     <input type="checkbox" className="checkbox border-slate-900" />
//                 </label>
//             </div>
//         </div>

//     );
// }
 
// export default GenderCheckBox;