import React, { useEffect, useState, useRef } from "react";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Button from '@mui/material/Button';
import moment from 'moment'
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import Style from './Form.module.css'
import { useNavigate } from "react-router-dom";




function Forms() {
  const navigate = useNavigate()
  const currentDate = new Date()
  const [selectedFile, setSelectedFile] = useState('');
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [value, setValue] = React.useState(dayjs(currentDate));
  const [certificateType, setCertificateType] = useState('');
  const [verifierEmail, setVerifierEmail] = useState('');
  const [issuerName, setIssuerName] = useState("");
  const [loadButton, setLoadButton] = useState(false)
  const [placeOfIssuance, setPlaceOfIssuance] = useState("")
  const onChangeFileUpload = (event) => {
    console.log("file picked", event.target.files[0].name)
    setSelectedFile(event.target.files[0])
  }
  const onChangeVerifierEmail = (event) => {
    console.log("area name", event.target.value)
    setVerifierEmail(event.target.value)
  }
  const onChangeCertificateType = (event) => {
    console.log("city name", event.target.value)
    setCertificateType(event.target.value)
  }
  const onChangeIssuerName = (event) => {
    setIssuerName(event.target.value)
  }
  const onChangePlaceIssuance = (event) => {
    setPlaceOfIssuance(event.target.value)
  }
  const onSubmitCertificateData=()=>{
    navigate('/viewCertificate')
  }
  const onSubmitForm = () => {
    if (selectedFile === '') {
      alert("Please select a file to upload")
    } else if (value === '') {
      alert("Please select a Date")
    } else if (issuerName === '') {
      alert("Please Enter the Issuer Name")
    } else if (verifierEmail === '') {
      alert("Please Enter the Verifier Email")
    } else if (certificateType === '') {
      alert("Please Enter the Certificate Type")
    } else if (placeOfIssuance === "") {
      alert("Please Enter the Place Of Issuance")
    } else {
      setLoadButton(true)
      const certificateData = new FormData();

      certificateData.append("files", selectedFile)
      certificateData.append("chaincodeName", "certificateregistry")
      certificateData.append("channelName", "mychannel")
      certificateData.append("issuerName", issuerName)
      certificateData.append("issuerDate", moment(value.toDate()).format("YYYY-MM-DD"))
      certificateData.append("certificate_type", certificateType)
      certificateData.append("verifier_email", verifierEmail)
      certificateData.append("createdBy", "manoj")
      certificateData.append("updatedBy", "manoj")
      certificateData.append("timestamp", moment(currentDate).format("YYYY-MM-DD HH:mm:ss"))
      certificateData.append("fcn", "invokeCertificateData")
      certificateData.append("username", "admin")
      certificateData.append("orgname", "Org1")
      certificateData.append("placeOfIssuance", placeOfIssuance)

      console.log("certificate data", certificateData)

      //   console.log("finalJSON", circleRegistryJSON)
      fetch(
        'http://localhost:4000/uploadCertificate',
        {
          method: 'POST',
          // headers: { 'Content-Type': 'multipart/form-data: boundary=add-random-characters' },
          body: certificateData,
        }
      )
        .then((response) => response.json())
        .then((result) => {
          console.log('Success:', result.message.message.message);
          setLoadButton(false)
          alert(result.message.message)
        })
        .catch((error) => {
          console.error('Error:', error);
          setLoadButton(false)
          alert("Error " + error)
        });
    }
  }
  return (
    <>
      <Grid item md={12}>
        <Container>
        <h6 className={Style.headerTitle}>Secure Your Certificate In Blockchain</h6>

          <Grid container spacing={4}>
            <Grid item md={4} >
              <TextField
                id="outlined-basic"
                label="Certificate Upload"
                variant="outlined"
                type="file"
                fullWidth
                InputLabelProps={{ style: { fontWeight: 'bold' }, shrink: true }}
                onChange={onChangeFileUpload}
              />
            </Grid>
            <Grid item md={4} >
              <TextField fullWidth onChange={onChangeIssuerName} InputLabelProps={{ style: { fontWeight: 'bold' } }} id="outlined-basic" label="Issuer Name" variant="outlined" />
            </Grid>
            <Grid item md={4}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  fullWidth
                  label="Date of Issuance"
                  InputLabelProps={{ style: { fontWeight: 'bold' } }}
                  value={value}
                  onChange={(newValue) => setValue(newValue)}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item md={4} >
              <TextField fullWidth onChange={onChangePlaceIssuance} InputLabelProps={{ style: { fontWeight: 'bold' } }} id="outlined-basic" label="Place of Issuance" variant="outlined" />
            </Grid>
            <Grid item md={4} >
              <TextField fullWidth onChange={onChangeCertificateType} InputLabelProps={{ style: { fontWeight: 'bold' } }} id="outlined-basic" label="Certificate Type" variant="outlined" />
            </Grid>
            <Grid item md={4} >
              <TextField fullWidth onChange={onChangeVerifierEmail} InputLabelProps={{ style: { fontWeight: 'bold' } }} id="outlined-basic" label="Verifier Email" variant="outlined" />
            </Grid>

            <br />
            <br />
            <br />
            <Grid item md={4} >
              {loadButton ? (<LoadingButton loading fullWidth
                loadingPosition="start"
                startIcon={<SaveIcon />}
                variant="outlined">
                Submit
              </LoadingButton>) : <Button fullWidth variant="contained" onClick={onSubmitForm}>Submit</Button>}


            </Grid>
            <Grid item md={4} >
              <Button fullWidth variant="contained" onClick={onSubmitCertificateData}>View Certificate Data</Button>
            </Grid>
          </Grid>
        </Container>
      </Grid>


    </>
  )
}


export default Forms