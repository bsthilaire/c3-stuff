// This file was automatically translated.
// Feel free to submit a PR if you find a more accurate translation.

export default {
  error: {
    forgotPassword: {
      too_many_requests:
        'U heeft de limiet van wachtwoord aanpassings pogingen bereikt. Wacht even voor dat u het nog een keer probeert.',
      'lock.fallback':
        'Onze excuses, er is iets fout gegaan bij de de aanvraag voor een wachtwoord aanpassing.',
      enterprise_email:
        'Het domein van uw e-mail maakt deel uit van een Enterprise-identiteitsprovider. Raadpleeg uw beveiligingsbeheerder om uw wachtwoord opnieuw in te stellen.'
    },
    login: {
      blocked_user: 'De gebruiker is geblokkeerd.',
      invalid_user_password: 'Gebruiker of wachtwoord is niet correct.',
      'lock.fallback': 'Onze excuses, er is iets mis gegaan bij het aanmelden.',
      'lock.invalid_code': 'Verkeerde code.',
      'lock.invalid_email_password': 'Verkeerde e-mailadres of wachtwoord.',
      'lock.invalid_username_password': 'Verkeerde gebruikersnaam of wachtwoord.',
      'lock.network':
        'Server is niet bereikbaar. Controleer uw netwerk verbinding en probeer het nog eens.',
      'lock.popup_closed': 'Popup venster gesloten. Probeer het nog een keer.',
      'lock.unauthorized': 'Autorisatie geweigerd. Probeer het nog een keer.',
      password_change_required:
        'U moet uw wachtwoord aanpassen omdat dit de eerste keer is dat u inlogt of omdat uw wachtwoord is verlopen.',
      password_leaked:
        'Deze login is geblokkeerd omdat uw wachtwoord is gelekt op een andere website. We hebben een e-mail verstuurd met instructies voor het deblokkeren.',
      too_many_attempts:
        'Uw account is geblokkeerd als gevolg van herhaalde pogingen om in te loggen.',
      'lock.mfa_registration_required':
        'Diverse verificatie is vereist, maar het apparaat is niet geregistreerd. Gelieve in te schrijven voordat verder gaat.',
      'lock.mfa_invalid_code': 'Verkeerde code. Probeer het opnieuw.',
      session_missing:
        'Kan uw authenticatie verzoek niet voltooien. Probeer opnieuw na het sluiten van alle geopende vensters',
      'hrd.not_matching_email': 'Gelieve gebruik te maken van uw zakelijke e-mail om in te loggen.',
      too_many_requests:
        'Het spijt ons. Er zijn op dit moment te veel aanvragen. Laad de pagina opnieuw en probeer het opnieuw. Als dit probleem aanhoudt, probeert u het later opnieuw.',
      invalid_captcha: 'Los de uitdagingsvraag op om te verifi??ren dat je geen robot bent.',
      invalid_recaptcha: 'Selecteer het selectievakje om te verifi??ren dat u geen robot bent.'
    },
    passwordless: {
      'bad.email': 'Het e-mailadres is ongeldig',
      'bad.phone_number': 'Het telefoonnummer is ongeldig',
      'lock.fallback': 'Onze excuses, er is iets fout gegaan.'
    },
    signUp: {
      invalid_password: 'Wachtwoord is ongeldig.',
      'lock.fallback': 'Onze excuses, er is iets mis gegaan bij de poging om te registreren.',
      password_dictionary_error: 'Wachtwoord is een te bekend woord.',
      password_no_user_info_error: 'Wachtwoord is gebaseerd op gebruikers informatie.',
      password_strength_error: 'Wachtwoord is niet sterk genoeg.',
      user_exists: 'Gebruiker bestaat al.',
      username_exists: 'Gebruikersnaam bestaat al.',
      social_signup_needs_terms_acception:
        'Ga akkoord met de onderstaande Servicevoorwaarden om door te gaan.'
    }
  },
  success: {
    logIn: 'Dank u voor het inloggen.',
    forgotPassword: 'Wij hebben een e-mail verstuurd voor het resetten van uw wachtwoord.',
    magicLink: 'Wij hebben een link verstuurd, naar %s, om mee in te loggen.',
    signUp: 'Bedankt voor uw aanmelding.'
  },
  blankErrorHint: '',
  blankPasswordErrorHint: 'Mag niet leeg zijn',
  blankEmailErrorHint: 'Mag niet leeg zijn',
  blankUsernameErrorHint: 'Mag niet leeg zijn',
  blankCaptchaErrorHint: 'Mag niet leeg zijn',
  codeInputPlaceholder: 'uw code',
  databaseEnterpriseLoginInstructions: '',
  databaseEnterpriseAlternativeLoginInstructions: 'of',
  databaseSignUpInstructions: '',
  databaseAlternativeSignUpInstructions: 'of',
  emailInputPlaceholder: 'iets@example.com',
  enterpriseLoginIntructions: 'Login met uw bedrijfs inloggegevens.',
  enterpriseActiveLoginInstructions: 'Voer uw bedrijfs inloggegevens in op %s.',
  failedLabel: 'Gefaald!',
  forgotPasswordAction: 'Wachtwoord vergeten?',
  forgotPasswordInstructions:
    'Geef uw e-mailadres op. Wij sturen een e-mail voor het resetten van uw wachtwoord.',
  forgotPasswordSubmitLabel: 'Verstuur e-mail',
  invalidErrorHint: '',
  invalidPasswordErrorHint: 'Ongeldig',
  invalidEmailErrorHint: 'Ongeldig',
  invalidUsernameErrorHint: 'Ongeldig',
  lastLoginInstructions: 'U bent laatst aangemeld met',
  loginAtLabel: 'Inloggen op %s',
  loginLabel: 'Inloggen',
  loginSubmitLabel: 'Inloggen',
  loginWithLabel: 'Inloggen met %s',
  notYourAccountAction: 'Niet uw gebruikersaccount?',
  passwordInputPlaceholder: 'uw wachtwoord',
  passwordStrength: {
    containsAtLeast: 'Bevat minsten %d van de volgende %d type karacters:',
    identicalChars: 'Niet meer dan %d identieke letters op een rij (e.g., "%s" is niet toegestaan)',
    nonEmpty: 'Wachtwoord mag niet leeg zijn',
    numbers: 'Cijfers (i.e. 0-9)',
    lengthAtLeast: 'Minstens %d letters lang',
    lowerCase: 'kleine letters (a-z)',
    shouldContain: 'Moet bevatten:',
    specialCharacters: 'Speciale letters (e.g. !@#$%^&*)',
    upperCase: 'Hoofdletters (A-Z)'
  },
  passwordlessEmailAlternativeInstructions:
    'Anders, voer uw e-mailadres in om in te loggen<br/>of cre??er een nieuwe gebruikersaccount',
  passwordlessEmailCodeInstructions: 'Er is een e-mail met de code verstuurd naar %s.',
  passwordlessEmailInstructions:
    'Voer uw e-mailadres in om aan te melden <br/>of maak een nieuw account aan',
  passwordlessSMSAlternativeInstructions:
    'Anders, voer uw telefoonnummer in om in te loggen<br/>of cre??er een nieuwe gebruikersaccount',
  passwordlessSMSCodeInstructions: 'Er is een SMS met de code verstuurd naar %s.',
  passwordlessSMSInstructions:
    'Voer uw telefoonnummer in om in te loggen <br/>of cre??er een nieuw gebruikersaccount',
  phoneNumberInputPlaceholder: 'uw telefoonnummer',
  resendCodeAction: 'Code niet ontvangen?',
  resendLabel: 'Opnieuw verzenden',
  resendingLabel: 'wordt verzonden...',
  retryLabel: 'Opnieuw proberen',
  sentLabel: 'Verzonden!',
  signUpLabel: 'Aanmelden',
  signUpSubmitLabel: 'Aanmelden',
  signUpWithLabel: 'Aanmelden met %s',
  socialLoginInstructions: '',
  socialSignUpInstructions: '',
  ssoEnabled: 'Single Sign-On geactiveerd',
  submitLabel: 'Verzenden',
  unrecoverableError: 'Er ging iets mis.<br/>Neem a.u.b. contact op met de technische support.',
  usernameFormatErrorHint:
    'Gebruik %d-%d letters, cijfers en de volgende tekens: "_", ".", "+", "-"',
  usernameInputPlaceholder: 'uw gebruikersnaam',
  usernameOrEmailInputPlaceholder: 'gebruikersnaam/e-mailadres',
  title: 'Auth0',
  welcome: 'Welkom %s!',
  windowsAuthInstructions: 'U bent verbonden vanaf uw bedrijfsnetwerk&hellip;',
  windowsAuthLabel: 'Windows Authenticatie',
  forgotPasswordTitle: 'Stel je wachtwoord opnieuw in',
  signUpTitle: 'Aanmelden',
  mfaInputPlaceholder: 'Code',
  mfaLoginTitle: '2-staps verificatie',
  mfaLoginInstructions: 'Vul de verificatiecode gegenereerd door uw mobiele applicatie.',
  mfaSubmitLabel: 'Log in',
  mfaCodeErrorHint: 'Gebruik %d nummers',
  showPassword: 'Laat wachtwoord zien',
  signUpTerms:
    'Door u aan te melden gaat u akkoord met onze servicevoorwaarden en ons privacybeleid.',
  captchaCodeInputPlaceholder: 'Voer de hierboven getoonde code in',
  captchaMathInputPlaceholder: 'Los de bovenstaande formule op'
};
