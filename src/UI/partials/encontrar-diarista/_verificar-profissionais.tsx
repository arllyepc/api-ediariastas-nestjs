import { Button, Container, Typography } from "@mui/material";
import PageTitle from "UI/components/data-display/PageTitle/PageTitle";
import SafeEnvironment from "UI/components/feedback/SafeEnvironment/SafeEnvironment";
import React, { PropsWithChildren } from "react";

import {
  FormElementsContainer,
  ProfissionaisContainer,
  ProfissionaisPaper,
} from "./_verificar-profissionais.styled";
import TextFieldMask from "UI/components/inputs/TextFieldMask/TextFieldMask";
import UserInformation from "UI/components/data-display/UserInformation/UserInformation";

const VerificarProfissionais: React.FC<PropsWithChildren> = () => {
  return (
    <>
      <SafeEnvironment />
      <PageTitle
        title="Conheça os profissionais"
        subtitle="Preeencha seu endereço e veja todos os profissionais da sua localidade"
      />
      <Container sx={{ mb: 10 }}>
        <FormElementsContainer>
          <TextFieldMask mask="00.000-000" label="Digite seu CEP" fullWidth />
          <Typography color="error">CEP não encontrado</Typography>
          <Button variant="contained" color="secondary" sx={{ width: "220px" }}>
            Buscar
          </Button>
        </FormElementsContainer>
        <ProfissionaisPaper>
          <ProfissionaisContainer>
            <UserInformation
              name={"Arlly Cavalcanti"}
              picture={"https://avatars.githubusercontent.com/u/64482343?v=4"}
              rating={5}
              description={"Web Developer"}
              isRating={true}
            />
            <UserInformation
              name={"Arlly Cavalcanti"}
              picture={"https://avatars.githubusercontent.com/u/64482343?v=4"}
              rating={5}
              description={"Web Developer"}
              isRating={true}
            />
            <UserInformation
              name={"Arlly Cavalcanti"}
              picture={"https://avatars.githubusercontent.com/u/64482343?v=4"}
              rating={5}
              description={"Web Developer"}
              isRating={true}
            />
          </ProfissionaisContainer>
          <Container sx={{ textAlign: "center" }}>
            <Typography variant="body2" color="textSecondary" sx={{ mt: 5 }}>
              ...e mais 50 disponíveis para o seu endereço
            </Typography>
            <Button variant="contained" color="secondary" sx={{ mt: 5 }}>
              Contratar profissional
            </Button>
          </Container>
        </ProfissionaisPaper>
      </Container>
    </>
  );
};

export default VerificarProfissionais;
