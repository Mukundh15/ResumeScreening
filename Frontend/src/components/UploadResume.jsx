import { useState } from "react";
import axios from "axios";

export default function UploadResume() {
    const [text,setText]=useState("");
    const [result,setResult]=useState("");
    const [file,setFile]=useState(null);

    const handleFileChange=(e)=>{
        const uploadedFile=e.target.files[0];
        setFile(uploadedFile);
    };
    const handleFileUpload=async()=>{
        if (!file) return alert("Please upload a file first.");
        const formData=new FormData();
        formData.append("file", file);
        try {
            const res=await axios.post("http://localhost:5000/upload",formData,{
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            setText(res.data.text);
        }catch(err){
            console.error(err);
            alert("Error processing file.");
        }
    };

    const handleSubmit=async ()=>{
        try{
            const res=await axios.post("http://localhost:5000/predict",{text});
            setResult(res.data.category);
        }catch(err){
            console.error(err);
            setResult("Error occurred.");
        }
    };

    return (
        <div className="row p-3">
            <h2 className="text-center mb-5">Upload Resume</h2>
            <div className="col-md-12">
                <div className="row">
                    <div className="col-4" >
                        <input type="file" className="form-control mb-3" onChange={handleFileChange} />
                    </div>
                    <div className="col">
                        <button className="btn btn-secondary mb-3 " onClick={handleFileUpload}>
                            Extract Text from File
                        </button>
                    </div>
                </div>

                <textarea
                    className="form-control"
                    rows="10"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Paste your resume text here or upload a file..."
                ></textarea>
                
                <button className="btn btn-primary mt-3" onClick={handleSubmit}>
                    Submit
                </button>

                {result && <div className="alert alert-info mt-3">Predicted Category: <strong>{result}</strong></div>}
            </div>
        </div>
    );
}
