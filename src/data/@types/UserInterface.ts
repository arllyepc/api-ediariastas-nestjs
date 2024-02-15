export interface UserShortInformationInterface {
  nomeCompleto: string;
  fotoUsuario?: string;
  reputacao?: number;
  cidade: string;
}

export interface BuscaCepResponse {
  diaristas: UserShortInformationInterface[];
  tamanhoPagina: number;
}
