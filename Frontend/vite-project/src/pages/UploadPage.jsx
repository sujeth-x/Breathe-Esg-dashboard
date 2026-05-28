import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

import { FiUploadCloud } from "react-icons/fi"
import { MdDashboard } from "react-icons/md"
import { HiOutlineShieldCheck } from "react-icons/hi"
import { IoLeaf } from "react-icons/io5"

function UploadPage() {

  const [file, setFile] = useState(null)

  const [message, setMessage] = useState("")

  const navigate = useNavigate()

  const handleUpload = async () => {

    if (!file) {

      alert("Please select a CSV file")

      return
    }

    const formData = new FormData()

    formData.append("file", file)

    try {

      const response = await axios.post(
        "https://breathe-esg-dashboard-cffd.onrender.com/api/upload/sap/",
        formData
      )

      setMessage(response.data.message)

    } catch (error) {

      console.log(error)

      setMessage("Upload failed")
    }
  }

  return (

    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom right,#f4fbf6,#f8fafc)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Inter, sans-serif",
        position: "relative",
        overflow: "hidden"
      }}
    >

   =

      <div
        style={{
          position: "absolute",
          top: "30px",
          left: "40px",
          display: "flex",
          alignItems: "center",
          gap: "12px"
        }}
      >

        <IoLeaf
          size={42}
          color="#16a34a"
        />

        <div>

          <h2
            style={{
              margin: 0,
              fontSize: "34px",
              fontWeight: "800",
              color: "#111827"
            }}
          >
            Breathe
            <span
              style={{
                color: "#16a34a"
              }}
            >
              {" "}ESG
            </span>
          </h2>

          <p
            style={{
              margin: 0,
              color: "#94a3b8",
              fontSize: "14px"
            }}
          >
            Building a Sustainable Tomorrow
          </p>

        </div>

      </div>



      <div
        style={{
          position: "absolute",
          top: "-120px",
          right: "-120px",
          width: "320px",
          height: "320px",
          backgroundColor: "#dcfce7",
          borderRadius: "50%",
          opacity: 0.5
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "-100px",
          left: "-100px",
          width: "280px",
          height: "280px",
          backgroundColor: "#dcfce7",
          borderRadius: "50%",
          opacity: 0.5
        }}
      />


      <div
        style={{
          width: "700px",
          backgroundColor: "rgba(255,255,255,0.88)",
          backdropFilter: "blur(10px)",
          borderRadius: "32px",
          padding: "70px",
          textAlign: "center",
          boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
          zIndex: 5
        }}
      >

      

        <div
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            background:
              "linear-gradient(to bottom right,#dcfce7,#bbf7d0)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
            marginBottom: "30px"
          }}
        >

          <FiUploadCloud
            size={58}
            color="#16a34a"
          />

        </div>

      

        <h1
          style={{
            fontSize: "74px",
            fontWeight: "800",
            marginBottom: "0px",
            color: "#0f172a",
            letterSpacing: "-3px"
          }}
        >
          Breathe
          <span
            style={{
              color: "#16a34a"
            }}
          >
            {" "}ESG
          </span>
        </h1>

     

       <div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "14px",
    marginTop: "50px",
    marginBottom: "35px"
  }}
>

  <div
    style={{
      width: "75px",
      height: "2px",
      backgroundColor: "#d1d5db"
    }}
  />

  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "10px"
    }}
  >

    <IoLeaf
      size={50}
      color="#16a34a"
    />

  </div>

  <div
    style={{
      width: "75px",
      height: "2px",
      backgroundColor: "#d1d5db"
    }}
  />

</div>


        <p
          style={{
            fontSize: "28px",
            color: "#64748b",
            marginBottom: "45px"
          }}
        >
          Upload SAP CSV File
        </p>

      

        <div
          style={{
            border: "2px dashed #bbf7d0",
            borderRadius: "24px",
            padding: "60px",
            background:
              "linear-gradient(to bottom,#fbfffc,#f0fdf4)",
            marginBottom: "45px"
          }}
        >

          
          <input
            type="file"
            onChange={(e) =>
              setFile(e.target.files[0])
            }
            style={{
              marginBottom: "20px",
              marginLeft:"85px"
        
            }}
          />

          <p
            style={{
              color: "#16a34a",
              fontWeight: "700",
              fontSize: "24px",
              marginBottom: "10px"
            }}
          >
            Choose a CSV file
          </p>

          <p
            style={{
              color: "#94a3b8",
              fontSize: "16px"
            }}
          >
            Drag and drop or upload manually
          </p>

        </div>

        {/* Buttons */}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "25px"
          }}
        >

          <button
            onClick={handleUpload}
            style={{
              padding: "18px 42px",
              border: "none",
              borderRadius: "16px",
              background:
                "linear-gradient(to right,#16a34a,#22c55e)",
              color: "white",
              fontSize: "18px",
              fontWeight: "700",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              boxShadow:
                "0 10px 25px rgba(34,197,94,0.25)"
            }}
          >

            <FiUploadCloud size={24} />

            Upload File

          </button>

          <button
            onClick={() => navigate("/dashboard")}
            style={{
              padding: "18px 42px",
              border: "none",
              borderRadius: "16px",
              background:
                "linear-gradient(to right,#16a34a,#22c55e)",
              color: "white",
              fontSize: "18px",
              fontWeight: "700",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              boxShadow:
                "0 10px 25px rgba(34,197,94,0.25)"
            }}
          >

            <MdDashboard size={24} />

            Go to Dashboard →

          </button>

        </div>

        {/* Success Message */}

        <p
          style={{
            marginTop: "25px",
            color: "#16a34a",
            fontWeight: "700"
          }}
        >
          {message}
        </p>

        {/* Footer Security */}

        <div
          style={{
            marginTop: "45px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            color: "#94a3b8",
            fontSize: "15px"
          }}
        >

          <HiOutlineShieldCheck
            size={22}
            color="#16a34a"
          />

          Your data is secure and used only for ESG analysis.

        </div>

      </div>

      {/* Bottom Footer */}

      <div
        style={{
          position: "absolute",
          bottom: "25px",
          color: "#94a3b8",
          fontSize: "14px"
        }}
      >
        © 2024 Breathe ESG. All rights reserved.
      </div>

    </div>
  )
}

export default UploadPage