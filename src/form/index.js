import React, { useState } from "react";
import Header from "../components/header";
import * as S from './style';
import { useForm } from "react-hook-form";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import ptBR from "date-fns/locale/pt-BR";


const dataProperties = [
  { id: 12345, name: "Agrotis 1", cnpj: "04.909.987/0001-89" },
  { id: 67890, name: "Agrotis 2", cnpj: "04.909.987/0001-88" },
  { id: 10111, name: "Agrotis 3", cnpj: "04.909.987/0001-87" },
  { id: 21314, name: "Agrotis 4", cnpj: "04.909.987/0001-86" },
  { id: 15161, name: "Agrotis 5", cnpj: "04.909.987/0001-85" },
]
const dataLaboratory = [
  { id: 1234, name: "Agro Skynet" },
  { id: 5678, name: "Umbrella Agro" },
  { id: 9010, name: "Osborn Agro" },
  { id: 1112, name: "Skyrim Agro" },
  { id: 1314, name: "Agro Brasil" },
]


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Form() {

  const { register, handleSubmit, setValue } = useForm();

  const [open, setOpen] = useState(false);
  const [dateStart, setDateStart] = useState(null);
  const [dateEnd, setDateEnd] = useState(null);
  const [propertie, setPropertie] = useState('');
  const [laboratory, setLaboratory] = useState('');

  const onSubmit = data => {
    console.log(JSON.stringify(data));
    setOpen(true);
  }

  const handlePropertie = (e) => {
    let selected = dataProperties[e.target.value];
    setPropertie(e.target.value, e.target.value);
    setValue('infoPropertie', { id: selected.id, name: selected.name });
    setValue('cnpj', selected.cnpj);
  }
  const handleLaboratory = (e) => {
    let selected = dataLaboratory[e.target.value];
    setLaboratory(e.target.value, e.target.value);
    setValue('laboratory', selected);
  }

  const handleClose = () => {
    setOpen(false);
  }
  return (
    <S.Container>
      <Header />

      <S.FormContainer onSubmit={handleSubmit(onSubmit)}>
        <S.FormHeader>
          <S.FormHeaderTitle>Teste front-end</S.FormHeaderTitle>
          <S.FormHeaderButton type="submit">Salvar</S.FormHeaderButton>
        </S.FormHeader>

        <S.FormContent>
          <S.ContentLeft>
            <FormControl variant="standard" margin="dense">
              <TextField
                label="Nome"
                {...register("name")}
                defaultValue=""
                variant="standard"
                required
                fullWidth
                margin="dense"
              />
            </FormControl>

            <FormControl variant="standard" margin="dense">
              <InputLabel id="propertie-label">Propriedade *</InputLabel>
              <Select
                labelId="propertie-label"
                id="propertie"
                value={propertie}
                onChange={(e) => handlePropertie(e)}
                label="Propriedade"
                fullWidth
                required
              >
                <MenuItem value=""></MenuItem>
                {dataProperties?.map((item, index) =>
                  <MenuItem key={index} value={index}>
                    <S.DropItemTitle>{item.name}</S.DropItemTitle>
                    <S.DropItemSubtitle>CNPJ {item.cnpj}</S.DropItemSubtitle>
                  </MenuItem>
                )}


              </Select>
            </FormControl>
          </S.ContentLeft>

          <S.ContentRight>
            <S.FormGroupRow>
              <FormControl margin="dense">
                <LocalizationProvider dateAdapter={AdapterDateFns} locale={ptBR}>
                  <DatePicker
                    label="Data Inicial *"
                    {...register("initialDate")}
                    value={dateStart}
                    onChange={(newValue) => {
                      setDateStart(newValue);
                      setValue('initialDate', newValue);
                    }}
                    renderInput={(params) =>
                      <TextField {...params}
                        variant="standard"
                        margin="dense"
                        fullWidth
                      />}
                    required
                  />
                </LocalizationProvider>
              </FormControl>

              <FormControl margin="dense">
                <LocalizationProvider dateAdapter={AdapterDateFns} locale={ptBR}>
                  <DatePicker
                    label="Data Final *"
                    {...register("finalDate")}
                    value={dateEnd}
                    onChange={(newValue) => {
                      setDateEnd(newValue);
                      setValue('finalDate', newValue);
                    }}
                    renderInput={(params) =>
                      <TextField {...params}
                        variant="standard"
                        margin="dense"
                        fullWidth
                      />}
                    required
                  />
                </LocalizationProvider>
              </FormControl>
            </S.FormGroupRow>

            <FormControl variant="standard" margin="dense">
              <InputLabel id="laboratory-label">Laboratório *</InputLabel>
              <Select
                labelId="laboratory-label"
                id="laboratory"
                value={laboratory}
                onChange={(e) => handleLaboratory(e)}
                label="Laboratório"
                required
              >
                {dataLaboratory?.map((item, index) =>
                  <MenuItem key={index} value={index}>
                    <S.DropItemTitle>{item.name}</S.DropItemTitle>
                  </MenuItem>
                )}

              </Select>
            </FormControl>
          </S.ContentRight>
        </S.FormContent>
        <S.FormGroupCol>
          <TextField
            label="Observações"
            {...register("observation")}
            defaultValue=""
            variant="standard"
            multiline
            rows={8}
            margin="dense"
            inputProps={{ maxLength: 1000 }}
          />
        </S.FormGroupCol>
      </S.FormContainer>


      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          sx={{ width: '100%' }}

        >
          Cadastro realizado com sucesso!
        </Alert>
      </Snackbar>

    </S.Container >
  );
}