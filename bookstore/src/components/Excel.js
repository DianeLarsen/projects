import * as xlsx from "xlsx"
import React from "react"

export default function Excel() {
    const [inventory, setInventory] = React.useState([])
    console.log(inventory)
    const readUploadFile = (e) => {
        e.preventDefault();
        if (e.target.files) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const data = e.target.result;
                const workbook = xlsx.read(data, { type: "array" });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const json = xlsx.utils.sheet_to_json(worksheet);
                console.log(json[0]);
                setInventory({
                    category: json[0].Category,   
                    ISBN: json[0].GTIN,
                }
                
                    )
                    
            };
            reader.readAsArrayBuffer(e.target.files[0]);
        }
      
    }
    
   
    return (
        <form>
        <label htmlFor="upload">Upload File</label>
        <input
            type="file"
            name="upload"
            id="upload"
            onChange={readUploadFile}
        />
    </form>
    );
  }
  