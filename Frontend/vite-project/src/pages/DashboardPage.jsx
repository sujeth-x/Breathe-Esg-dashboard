import { useEffect, useState } from "react"

import axios from "axios"

import { useNavigate } from "react-router-dom"

import {
  MdPending,
  MdOutlineWarningAmber
} from "react-icons/md"

import {
  FaCheckCircle,
  FaTimesCircle
} from "react-icons/fa"

import {
  FiSearch
} from "react-icons/fi"

function DashboardPage() {

  const [records, setRecords] = useState([])

  const [search, setSearch] = useState("")

  const navigate = useNavigate()

  const fetchRecords = async () => {

    try {

      const response = await axios.get(
        "http://127.0.0.1:8000/api/records/"
      )

      setRecords(response.data)

    } catch (error) {

      console.log(error)
    }
  }

  useEffect(() => {

    fetchRecords()

  }, [])

  const approveRecord = async (id) => {

    try {

      await axios.post(
        `http://127.0.0.1:8000/api/records/${id}/approve/`
      )

      fetchRecords()

    } catch (error) {

      console.log(error)
    }
  }

  const rejectRecord = async (id) => {

    try {

      await axios.post(
        `http://127.0.0.1:8000/api/records/${id}/reject/`
      )

      fetchRecords()

    } catch (error) {

      console.log(error)
    }
  }

  const filteredRecords = records.filter((record) =>

    record.activity_type
      .toLowerCase()
      .includes(search.toLowerCase())
  )

  const approvedCount = records.filter(
    (r) => r.status === "APPROVED"
  ).length

  const rejectedCount = records.filter(
    (r) => r.status === "REJECTED"
  ).length

  const pendingCount = records.filter(
    (r) => r.status === "PENDING"
  ).length

  const suspiciousCount = records.filter(
    (r) => r.is_suspicious
  ).length

  return (

    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom right,#f4fbf6,#f8fafc)",
        padding: "40px",
        fontFamily: "Inter, sans-serif"
      }}
    >

     

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "40px"
        }}
      >

        <div>

          <h1
            style={{
              margin: 0,
              fontSize: "46px",
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
          </h1>

          <p
            style={{
              color: "#64748b",
              marginTop: "8px",
              fontSize: "16px"
            }}
          >
            ESG Emission Monitoring Dashboard
          </p>

        </div>

        <button
          onClick={() => navigate("/")}
          style={{
            padding: "14px 24px",
            border: "none",
            borderRadius: "14px",
            background:
              "linear-gradient(to right,#16a34a,#22c55e)",
            color: "white",
            fontWeight: "700",
            cursor: "pointer",
            boxShadow:
              "0 10px 25px rgba(34,197,94,0.25)"
          }}
        >
          Upload New File
        </button>

      </div>

     
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "22px",
          marginBottom: "40px"
        }}
      >

       

        <div style={styles.card}>

          <FaCheckCircle
            size={42}
            color="#16a34a"
          />

          <h2
            style={{
              fontSize: "38px",
              margin: "14px 0 8px 0",
              color: "#111827",
              fontWeight: "800"
            }}
          >
            {approvedCount}
          </h2>

          <p style={styles.cardText}>
            Approved
          </p>

        </div>

        

        <div style={styles.card}>

          <FaTimesCircle
            size={42}
            color="#ef4444"
          />

          <h2
            style={{
              fontSize: "38px",
              margin: "14px 0 8px 0",
              color: "#111827",
              fontWeight: "800"
            }}
          >
            {rejectedCount}
          </h2>

          <p style={styles.cardText}>
            Rejected
          </p>

        </div>

        

        <div style={styles.card}>

          <MdPending
            size={46}
            color="#f59e0b"
          />

          <h2
            style={{
              fontSize: "38px",
              margin: "14px 0 8px 0",
              color: "#111827",
              fontWeight: "800"
            }}
          >
            {pendingCount}
          </h2>

          <p style={styles.cardText}>
            Pending
          </p>

        </div>

   

        <div style={styles.card}>

          <MdOutlineWarningAmber
            size={46}
            color="#dc2626"
          />

          <h2
            style={{
              fontSize: "38px",
              margin: "14px 0 8px 0",
              color: "#111827",
              fontWeight: "800"
            }}
          >
            {suspiciousCount}
          </h2>

          <p style={styles.cardText}>
            Suspicious
          </p>

        </div>

      </div>

     

      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "28px",
          boxShadow:
            "0 15px 40px rgba(0,0,0,0.06)"
        }}
      >

    

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "25px"
          }}
        >

          <h2
            style={{
              margin: 0,
              color: "#111827"
            }}
          >
            Emission Records
          </h2>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#f8fafc",
              padding: "12px 16px",
              borderRadius: "14px",
              width: "300px"
            }}
          >

            <FiSearch color="#64748b" />

            <input
              type="text"
              placeholder="Search activity..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              style={{
                border: "none",
                outline: "none",
                background: "transparent",
                marginLeft: "10px",
                width: "100%"
              }}
            />

          </div>

        </div>

      

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse"
          }}
        >

          <thead>

            <tr
              style={{
                backgroundColor: "#f8fafc"
              }}
            >

              <th style={styles.th}>ID</th>
              <th style={styles.th}>Activity</th>
              <th style={styles.th}>Quantity</th>
              <th style={styles.th}>Emission</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Suspicious</th>
              <th style={styles.th}>Action</th>

            </tr>

          </thead>

          <tbody>

            {
              filteredRecords.map((record) => (

                <tr
                  key={record.id}
                  style={{
                    borderBottom:
                      "1px solid #e5e7eb"
                  }}
                >

                  <td style={styles.td}>
                    {record.id}
                  </td>

                  <td style={styles.td}>
                    {record.activity_type}
                  </td>

                  <td style={styles.td}>
                    {record.quantity}
                  </td>

                  <td style={styles.td}>
                    {record.emission_value}
                  </td>

                  {/* Status */}

                  <td style={styles.td}>

                    <span
                      style={{
                        padding: "8px 14px",
                        borderRadius: "20px",
                        fontSize: "14px",
                        fontWeight: "700",

                        backgroundColor:

                          record.status === "APPROVED"
                            ? "#dcfce7"

                          : record.status === "REJECTED"
                            ? "#fee2e2"

                          : "#fef3c7",

                        color:

                          record.status === "APPROVED"
                            ? "#16a34a"

                          : record.status === "REJECTED"
                            ? "#dc2626"

                          : "#d97706"
                      }}
                    >
                      {record.status}
                    </span>

                  </td>

                  {/* Suspicious */}

                  <td style={styles.td}>

                    {
                      record.is_suspicious

                        ? (
                          <span
                            style={{
                              color: "#dc2626",
                              fontWeight: "700"
                            }}
                          >
                            ⚠ Yes
                          </span>
                        )

                        : (
                          <span
                            style={{
                              color: "#16a34a",
                              fontWeight: "600"
                            }}
                          >
                            No
                          </span>
                        )
                    }

                  </td>

                  {/* Actions */}

                  <td style={styles.td}>

                    {
                      record.status === "PENDING"

                        ? (

                          <div
                            style={{
                              display: "flex",
                              gap: "10px"
                            }}
                          >

                            <button
                              onClick={() =>
                                approveRecord(record.id)
                              }
                              style={{
                                padding: "10px 16px",
                                border: "none",
                                borderRadius: "10px",
                                backgroundColor: "#16a34a",
                                color: "white",
                                cursor: "pointer",
                                fontWeight: "700"
                              }}
                            >
                              Approve
                            </button>

                            <button
                              onClick={() =>
                                rejectRecord(record.id)
                              }
                              style={{
                                padding: "10px 16px",
                                border: "none",
                                borderRadius: "10px",
                                backgroundColor: "#ef4444",
                                color: "white",
                                cursor: "pointer",
                                fontWeight: "700"
                              }}
                            >
                              Reject
                            </button>

                          </div>

                        )

                        : (

                          <span
                            style={{
                              color: "#94a3b8",
                              fontWeight: "700"
                            }}
                          >
                            Locked
                          </span>

                        )
                    }

                  </td>

                </tr>

              ))
            }

          </tbody>

        </table>

      </div>

    </div>
  )
}

const styles = {

  card: {

    backgroundColor: "white",

    padding: "30px",

    borderRadius: "24px",

    boxShadow:
      "0 10px 30px rgba(0,0,0,0.05)",

    textAlign: "center",

    color: "#111827"
  },

  cardText: {

    margin: 0,

    color: "#64748b",

    fontSize: "18px",

    fontWeight: "600"
  },

  th: {

    textAlign: "left",

    padding: "16px",

    color: "#64748b",

    fontWeight: "700"
  },

  td: {

    padding: "18px 16px",

    color: "#111827"
  }
}

export default DashboardPage