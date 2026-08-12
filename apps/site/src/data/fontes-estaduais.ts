export interface FonteExterna {
  nome: string;
  url: string;
  descricao: string;
}

const tecnologiaPublicaPorUf: Record<string, FonteExterna> = {
  ac: { nome: 'SEAD/AC', url: 'https://sead.ac.gov.br/', descricao: 'Secretaria de Estado de Administração do Acre' },
  al: { nome: 'ITEC/AL', url: 'https://www.itec.al.gov.br/', descricao: 'Instituto de Tecnologia em Informática e Informação de Alagoas' },
  am: { nome: 'PRODAM/AM', url: 'https://www.prodam.am.gov.br/', descricao: 'Processamento de Dados Amazonas' },
  ap: { nome: 'PRODAP/AP', url: 'https://www.prodap.ap.gov.br/', descricao: 'Centro de Gestão da Tecnologia da Informação do Amapá' },
  ba: { nome: 'PRODEB/BA', url: 'http://www.prodeb.ba.gov.br/', descricao: 'Companhia de Processamento de Dados da Bahia' },
  ce: { nome: 'ETICE/CE', url: 'https://www.etice.ce.gov.br/', descricao: 'Empresa de Tecnologia da Informação do Ceará' },
  df: { nome: 'SGDI/DF', url: 'https://www.economia.df.gov.br/', descricao: 'Secretaria de Governança Digital e Integração do Distrito Federal' },
  es: { nome: 'PRODEST/ES', url: 'https://www.prodest.es.gov.br/', descricao: 'Instituto de Tecnologia da Informação e Comunicação do Espírito Santo' },
  go: { nome: 'SECTI/GO', url: 'https://goias.gov.br/inovacao/', descricao: 'Secretaria de Ciência, Tecnologia e Inovação de Goiás' },
  ma: { nome: 'ATI/MA', url: 'https://www.ati.ma.gov.br/', descricao: 'Agência Estadual de Tecnologia da Informação do Maranhão' },
  mg: { nome: 'PRODEMGE/MG', url: 'https://www.prodemge.gov.br/', descricao: 'Companhia de Tecnologia da Informação de Minas Gerais' },
  ms: { nome: 'SETDIG/MS', url: 'https://www.segov.ms.gov.br/', descricao: 'Secretaria Executiva de Transformação Digital de Mato Grosso do Sul' },
  mt: { nome: 'MTI/MT', url: 'https://www.mti.mt.gov.br/', descricao: 'Empresa Mato-Grossense de Tecnologia da Informação' },
  pa: { nome: 'PRODEPA/PA', url: 'https://www.prodepa.pa.gov.br/', descricao: 'Empresa de Tecnologia da Informação e Comunicação do Pará' },
  pb: { nome: 'CODATA/PB', url: 'https://codata.pb.gov.br/', descricao: 'Companhia de Processamento de Dados da Paraíba' },
  pe: { nome: 'ATI/PE', url: 'https://www.ati.pe.gov.br/', descricao: 'Agência Estadual de Tecnologia da Informação de Pernambuco' },
  pi: { nome: 'ETIPI/PI', url: 'https://www.etipi.com.br/', descricao: 'Empresa de Tecnologia da Informação do Piauí' },
  pr: { nome: 'CELEPAR/PR', url: 'https://www.celepar.pr.gov.br/', descricao: 'Companhia de Tecnologia da Informação e Comunicação do Paraná' },
  rj: { nome: 'PRODERJ/RJ', url: 'https://www.proderj.rj.gov.br/', descricao: 'Centro de Tecnologia de Informação e Comunicação do Rio de Janeiro' },
  rn: { nome: 'COTIC/RN', url: 'http://www.cotic.rn.gov.br/', descricao: 'Coordenadoria de Tecnologia da Informação e Comunicação do Rio Grande do Norte' },
  ro: { nome: 'SETIC/RO', url: 'https://rondonia.ro.gov.br/setic/', descricao: 'Superintendência Estadual de Tecnologia da Informação e Comunicação de Rondônia' },
  rr: { nome: 'SEGOD/RR', url: 'https://portal.rr.gov.br/secretarias/secretaria-de-estado-de-governo-digital-2/', descricao: 'Secretaria de Estado de Governo Digital de Roraima' },
  rs: { nome: 'PROCERGS/RS', url: 'https://www.procergs.rs.gov.br/', descricao: 'Centro de Tecnologia da Informação e Comunicação do Rio Grande do Sul' },
  sc: { nome: 'CIASC/SC', url: 'https://www.ciasc.sc.gov.br/', descricao: 'Centro de Informática e Automação de Santa Catarina' },
  se: { nome: 'EMGETIS/SE', url: 'https://www.emgetis.se.gov.br/', descricao: 'Empresa Sergipana de Tecnologia da Informação' },
  sp: { nome: 'PRODESP/SP', url: 'https://www.prodesp.sp.gov.br/', descricao: 'Companhia de Processamento de Dados do Estado de São Paulo' },
  to: { nome: 'ATI/TO', url: 'https://www.ati.to.gov.br/', descricao: 'Agência de Tecnologia da Informação do Tocantins' }
};

export function getFontesEstaduais(uf: string): { sebrae: FonteExterna; tecnologiaPublica?: FonteExterna } {
  const sigla = uf.toLowerCase();
  return {
    sebrae: {
      nome: `Sebrae/${sigla.toUpperCase()}`,
      url: `https://sebrae.com.br/sites/PortalSebrae/ufs/${sigla}`,
      descricao: 'Orientação, capacitação e serviços para pequenos negócios no estado'
    },
    tecnologiaPublica: tecnologiaPublicaPorUf[sigla]
  };
}
