import { AlertVariables } from '../../../teams/components/Alert/alertVariables'

export default (siteVars: any): Partial<AlertVariables> => {
  return {
    backgroundColor: siteVars.colors.white,
    borderColor: siteVars.colors.white,
    color: siteVars.colors.black,

    dangerColor: siteVars.colors.black,
    dangerBackgroundColor: siteVars.colors.white,
    dangerBorderColor: siteVars.colors.white,

    oofColor: siteVars.colors.black,
    oofBackgroundColor: siteVars.colors.white,
    oofBorderColor: siteVars.colors.white,

    infoColor: siteVars.colors.black,
    infoBackgroundColor: siteVars.colors.white,
    infoBorderColor: siteVars.colors.white,

    urgentColor: siteVars.colors.black,
    urgentBackgroundColor: siteVars.colors.white,
    urgentBorderColor: siteVars.colors.white,
  }
}
