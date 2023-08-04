import type { LocalizationResource } from "@clerk/types";

const commonTexts = {
  signIn: {
    phoneCode: {
      title: "Проверьте ваш телефон",
      subtitle: 'чтобы продолжить работу в "{{applicationName}}"',
      formTitle: "Верификационный код",
      formSubtitle: "Введите верификационный код, отправленный на Ваш телефон",
      resendButton: "Переотправить код",
    },
  },
} as const;

export const ruRU: LocalizationResource = {
  locale: "ru-RU",
  socialButtonsBlockButton: "Продолжить с помощью {{provider|titleize}}",
  dividerText: "или",
  formFieldLabel__emailAddress: "Почта",
  formFieldLabel__emailAddresses: "Почтовые адреса",
  formFieldLabel__phoneNumber: "Номер телефона",
  formFieldLabel__username: "Имя пользователя",
  formFieldLabel__emailAddress_phoneNumber: "Почта или номер телефона",
  formFieldLabel__emailAddress_username: "Почта или имя пользователя",
  formFieldLabel__phoneNumber_username: "номер телефона или имя пользователя",
  formFieldLabel__emailAddress_phoneNumber_username:
    "Почта, номер телефона или имя пользователя",
  formFieldLabel__password: "Пароль",
  formFieldLabel__currentPassword: "Текущий пароль",
  formFieldLabel__newPassword: "Новый пароль",
  formFieldLabel__confirmPassword: "Подтверждение пароля",
  formFieldLabel__signOutOfOtherSessions: "Выйти со всех других устройств",
  formFieldLabel__firstName: "Имя",
  formFieldLabel__lastName: "Фамилия",
  formFieldLabel__backupCode: "Код восстановления",
  formFieldLabel__organizationName: "Название организации",
  formFieldLabel__role: "Роль",
  formFieldInputPlaceholder__emailAddress: "",
  formFieldInputPlaceholder__emailAddresses:
    "Введите или вставьте один или более адресов почты, разделенных пробелами или запятыми",
  formFieldInputPlaceholder__phoneNumber: "",
  formFieldInputPlaceholder__username: "",
  formFieldInputPlaceholder__emailAddress_phoneNumber: "",
  formFieldInputPlaceholder__emailAddress_username: "",
  formFieldInputPlaceholder__phoneNumber_username: "",
  formFieldInputPlaceholder__emailAddress_phoneNumber_username: "",
  formFieldInputPlaceholder__password: "",
  formFieldInputPlaceholder__firstName: "",
  formFieldInputPlaceholder__lastName: "",
  formFieldInputPlaceholder__backupCode: "",
  formFieldInputPlaceholder__organizationName: "",
  formFieldError__notMatchingPasswords: "Пароли не совпадают.",
  formFieldError__matchingPasswords: "Пароли совпадают.",
  formFieldAction__forgotPassword: "Забыли пароль?",
  formFieldHintText__optional: "Опционально",
  formButtonPrimary: "Продолжить",
  signInEnterPasswordTitle: "Введите Ваш пароль",
  backButton: "Назад",
  footerActionLink__useAnotherMethod: "Использовать другой метод",
  badge__primary: "Основной",
  badge__thisDevice: "Это устройство",
  badge__userDevice: "Пользовательское устройство",
  badge__otherImpersonatorDevice: "Другое устройство",
  badge__default: "По-умолчанию",
  badge__unverified: "Неверифицированный",
  badge__requiresAction: "Требуется действие",
  badge__you: "Вы",
  footerPageLink__help: "Помощь",
  footerPageLink__privacy: "Приватность",
  footerPageLink__terms: "Условия",
  paginationButton__previous: "Назад",
  paginationButton__next: "Вперед",
  paginationRowText__displaying: "Отображение",
  paginationRowText__of: "из",
  membershipRole__admin: "Администратор",
  membershipRole__basicMember: "Член",
  membershipRole__guestMember: "Гость",
  signUp: {
    start: {
      title: "Создайте Ваш аккаунт",
      subtitle: 'чтобы продолжить работу в "{{applicationName}}"',
      actionText: "Уже есть аккаунт?",
      actionLink: "Войти",
    },
    emailLink: {
      title: "Верифицируйте Вашу почту",
      subtitle: 'чтобы продолжить работу в "{{applicationName}}"',
      formTitle: "Верификационная ссылка",
      formSubtitle:
        "Используйте верификационную ссылку, оправленную Вам на почту",
      resendButton: "Переотправить ссылку",
      verified: {
        title: "Успешный вход",
      },
      loading: {
        title: "Входим...",
      },
      verifiedSwitchTab: {
        title: "Почта верифицирована",
        subtitle: "Вернитесь на новую открытую вкладку, чтобы продолжить",
        subtitleNewTab: "Вернитесь на предыдущую вкладку, чтобы продолжить",
      },
    },
    emailCode: {
      title: "Верифицируйте Вашу почту",
      subtitle: 'чтобы продолжить работу в "{{applicationName}}"',
      formTitle: "Верификационный код",
      formSubtitle: "Введите верификационный код, отправленный Вам на почту",
      resendButton: "Переотправить код",
    },
    phoneCode: {
      title: "Верифицируйте Ваш номер телефона",
      subtitle: 'чтобы продолжить работу в "{{applicationName}}"',
      formTitle: "Верификационный код",
      formSubtitle: "Введите верификационный код, отправленный на Ваш телефон",
      resendButton: "Переотправить код",
    },
    continue: {
      title: "Заполните все поля",
      subtitle: 'чтобы продолжить работу в "{{applicationName}}"',
      actionText: "Уже есть аккаунт?",
      actionLink: "Войти",
    },
  },
  signIn: {
    start: {
      title: "Войти",
      subtitle: 'чтобы продолжить работу в "{{applicationName}}"',
      actionText: "Нет аккаунта?",
      actionLink: "Зарегистрироваться",
      actionLink__use_email: "Использовать почту",
      actionLink__use_phone: "Использовать номер телефона",
      actionLink__use_username: "Использовать имя пользователя",
      actionLink__use_email_username: "Использовать почту или имя пользователя",
    },
    password: {
      title: "Введите пароль",
      subtitle: 'чтобы продолжить работу в "{{applicationName}}"',
      actionLink: "Использовать другой метод",
    },
    forgotPasswordAlternativeMethods: {
      title: "Забыли пароль?",
      label__alternativeMethods: "Или, войти другим способом",
      blockButton__resetPassword: "Восстановить пароль",
    },
    forgotPassword: {
      title_email: "Проверьте почту",
      title_phone: "Проверьте телефон",
      subtitle: "чтобы восстановить пароль",
      formTitle: "Код восстановления пароля",
      formSubtitle_email: "Введите код, отправленный вам на почту",
      formSubtitle_phone: "Введите код, отправленный вам на телефон",
      resendButton: "Отправить код еще раз",
    },
    resetPassword: {
      title: "Сбросить пароль",
      formButtonPrimary: "Сбросить пароль",
      successMessage:
        "Ваш пароль успешно изменен. Выполняется вход, подождите.",
    },
    resetPasswordMfa: {
      detailsLabel:
        "Необходимо верифицировать вашу личность перед восстановлением пароля",
    },
    emailCode: {
      title: "Проверьте Вашу почту",
      subtitle: 'чтобы продолжить работу в "{{applicationName}}"',
      formTitle: "Верификационный код",
      formSubtitle: "Введите верификационный код, отправленный на Вашу почту",
      resendButton: "Переотправить код",
    },
    emailLink: {
      title: "Проверьте Вашу почту",
      subtitle: 'чтобы продолжить работу в "{{applicationName}}"',
      formTitle: "Верификационная ссылка",
      formSubtitle:
        "Используйте верификационную ссылку, отправленную на Вашу почту",
      resendButton: "Переотправить ссылку",
      unusedTab: {
        title: "Вкладку можно закрыть",
      },
      verified: {
        title: "Успешный вход",
        subtitle: "Вы скоро будете перенаправлены",
      },
      verifiedSwitchTab: {
        subtitle: "Вернитесь на начальную вкладку, чтобы продолжить",
        titleNewTab: "Залогиньтесь на другой вкладке",
        subtitleNewTab:
          "Вернитесь на только что открытую вкладку, чтобы продолжить",
      },
      loading: {
        title: "Входим...",
        subtitle: "Вы скоро будете перенаправлены",
      },
      failed: {
        title: "Эта верификационная ссылка невалидная.",
        subtitle: "Вернитесь на начальную вкладку, чтобы продолжить.",
      },
      expired: {
        title: "Эта верификационная ссылка истекла",
        subtitle: "Вернитесь на начальную вкладку, чтобы продолжить.",
      },
    },
    phoneCode: { ...commonTexts.signIn.phoneCode },
    phoneCodeMfa: { ...commonTexts.signIn.phoneCode, subtitle: "" },
    totpMfa: {
      title: "Двухфакторая верификация",
      subtitle: "",
      formTitle: "Верификационный код",
      formSubtitle: "Введите верификационный код из Вашего аутнетификатора",
    },
    backupCodeMfa: {
      title: "Введите код восстановления",
      subtitle: 'чтобы продолжить работу в "{{applicationName}}"',
      formTitle: "",
      formSubtitle: "",
    },
    alternativeMethods: {
      title: "Использовать другой метод",
      actionLink: "Помощь",
      blockButton__emailLink: "Отправить ссылку на {{identifier}}",
      blockButton__emailCode: "Отправить код на {{identifier}}",
      blockButton__phoneCode: "Отправить код на {{identifier}}",
      blockButton__password: "Войти с паролем",
      blockButton__totp: "Используйте аутентификатор",
      blockButton__backupCode: "Используйте код восстановления",
      getHelp: {
        title: "Помощь",
        content: `Если вы испытваете сложности со входом в ваш аккаунт, напишите нам и мы постараемся восстаносить Ваш доступ в кратчайшие сроки.`,
        blockButton__emailSupport: "Написать в поддержку",
      },
    },
    noAvailableMethods: {
      title: "Невозможно войти",
      subtitle: "Произошла ошибка",
      message: "Невозможно войти. Нет доступных факторов аутентификации.",
    },
  },
  userProfile: {
    mobileButton__menu: "Меню",
    formButtonPrimary__continue: "Продолжить",
    formButtonPrimary__finish: "Готово",
    formButtonReset: "Отмена",
    start: {
      headerTitle__account: "Аккаунт",
      headerTitle__security: "Безопасность",
      headerSubtitle__account: "Управление информацией об аккаунте",
      headerSubtitle__security: "Управление настройками безопасности",
      profileSection: {
        title: "Профиль",
      },
      usernameSection: {
        title: "Имя пользователя",
        primaryButton__changeUsername: "Изменить имя пользователя",
        primaryButton__setUsername: "Установить имя пользователя",
      },
      emailAddressesSection: {
        title: "Адреса электронной почты",
        primaryButton: "Добавить адрес электронной почты",
        detailsTitle__primary: "Основной адрес электронной почты",
        detailsSubtitle__primary:
          "Этот адрес электронной почты является основным",
        detailsAction__primary: "Завершить проверку",
        detailsTitle__nonPrimary:
          "Установить в качестве основного адреса электронной почты",
        detailsSubtitle__nonPrimary:
          "Установите этот адрес электронной почты как основной, чтобы получать сообщения относительно вашей учетной записи.",
        detailsAction__nonPrimary: "Установить в качестве основного",
        detailsTitle__unverified: "Непроверенный адрес электронной почты",
        detailsSubtitle__unverified:
          "Этот адрес электронной почты не был проверен и может иметь ограниченный функционал",
        detailsAction__unverified: "Завершить проверку",
        destructiveActionTitle: "Удалить",
        destructiveActionSubtitle:
          "Удалить этот адрес электронной почты и удалить его из вашей учетной записи",
        destructiveAction: "Удалить адрес электронной почты",
      },
      phoneNumbersSection: {
        title: "Номера телефонов",
        primaryButton: "Добавить номер телефона",
        detailsTitle__primary: "Основной номер телефона",
        detailsSubtitle__primary:
          "Этот номер телефона является основным номером телефона",
        detailsAction__primary: "Завершить верификацию",
        detailsTitle__nonPrimary: "Установить как основной номер телефона",
        detailsSubtitle__nonPrimary:
          "Установите этот номер телефона в качестве основного для получения сообщений относительно вашей учетной записи.",
        detailsAction__nonPrimary: "Установить как основной",
        detailsTitle__unverified: "Неподтвержденный номер телефона",
        detailsSubtitle__unverified:
          "Этот номер телефона не был подтвержден и может быть ограничен в функциональности",
        detailsAction__unverified: "Завершить верификацию",
        destructiveActionTitle: "Удалить",
        destructiveActionSubtitle:
          "Удалите этот номер телефона и удалите его из своей учетной записи",
        destructiveAction: "Удалить номер телефона",
      },
      connectedAccountsSection: {
        title: "Подключенные аккаунты",
        primaryButton: "Подключить аккаунт",
        title__conectionFailed: "Повторная попытка подключения",
        title__connectionFailed: "Повторная попытка подключения",
        title__reauthorize: "Требуется повторная авторизация",
        subtitle__reauthorize:
          "Требуется повторная авторизация этого приложения из-за обновления необходимых областей видимости, и вы можете испытывать ограниченную функциональность. Пожалуйста, повторно авторизуйте это приложение, чтобы избежать проблем",
        actionLabel__conectionFailed: "Попробовать снова",
        actionLabel__connectionFailed: "Попробовать снова",
        actionLabel__reauthorize: "Авторизовать сейчас",
        destructiveActionTitle: "Удалить",
        destructiveActionSubtitle:
          "Удалите этот подключенный аккаунт из своей учетной записи",
        destructiveActionAccordionSubtitle: "Удалить подключенный аккаунт",
      },
      passwordSection: {
        title: "Пароль",
        primaryButton__changePassword: "Изменить пароль",
        primaryButton__setPassword: "Установить пароль",
      },
      mfaSection: {
        title: "Двухфакторная аутентификация",
        primaryButton: "Добавить двухфакторную аутентификацию",
        phoneCode: {
          destructiveActionTitle: "Удалить",
          destructiveActionSubtitle:
            "Удалить этот номер телефона из методов двухфакторной аутентификации",
          destructiveActionLabel: "Удалить номер телефона",
          title__default: "Фактор по умолчанию",
          title__setDefault: "Установить как фактор по умолчанию",
          subtitle__default:
            "Этот фактор будет использоваться как метод двухфакторной аутентификации по умолчанию при входе в систему.",
          subtitle__setDefault:
            "Установите этот фактор как фактор по умолчанию, чтобы использовать его в качестве метода двухфакторной аутентификации по умолчанию при входе в систему.",
          actionLabel__setDefault: "Установить по умолчанию",
        },
        backupCodes: {
          headerTitle: "Резервные коды",
          title__regenerate: "Сгенерировать новые резервные коды",
          subtitle__regenerate:
            "Получите новый набор безопасных резервных кодов. Предыдущие резервные коды будут удалены и не могут быть использованы.",
          actionLabel__regenerate: "Сгенерировать коды",
        },
        totp: {
          headerTitle: "Приложение аутентификации",
          title: "Фактор по умолчанию",
          subtitle:
            "Этот фактор будет использоваться как метод двухфакторной аутентификации по умолчанию при входе в систему.",
          destructiveActionTitle: "Удалить",
          destructiveActionSubtitle:
            "Удалить приложение аутентификации из методов двухфакторной аутентификации",
          destructiveActionLabel: "Удалить приложение аутентификации",
        },
      },
      activeDevicesSection: {
        title: "Активные устройства",
        primaryButton: "Активные устройства",
        detailsTitle: "Текущее устройство",
        detailsSubtitle: "Это устройство, которое вы используете сейчас",
        destructiveActionTitle: "Выйти",
        destructiveActionSubtitle: "Выйти из учетной записи на этом устройстве",
        destructiveAction: "Выйти из устройства",
      },
      web3WalletsSection: {
        title: "Web3 кошельки",
        primaryButton: "Web3 кошельки",
        destructiveActionTitle: "Удалить",
        destructiveActionSubtitle:
          "Удалить этот Web3 кошелек из вашего аккаунта",
        destructiveAction: "Удалить кошелек",
      },
    },
    profilePage: {
      title: "Обновить профиль",
      imageFormTitle: "Изображение профиля",
      imageFormSubtitle: "Загрузить изображение",
      imageFormDestructiveActionSubtitle: "Удалить изображение",
      fileDropAreaTitle: "Перетащите файл сюда или...",
      fileDropAreaAction: "Выберите файл",
      fileDropAreaHint:
        "Загрузите изображение в форматах JPG, PNG, GIF или WEBP размером меньше 10 МБ",
      successMessage: "Ваш профиль был обновлен.",
    },
    usernamePage: {
      title: "Обновить имя пользователя",
      successMessage: "Имя пользователя было обновлено.",
    },
    emailAddressPage: {
      title: "Добавить адрес электронной почты",
      emailCode: {
        formHint:
          "На этот адрес электронной почты будет отправлено письмо с верификационным кодом.",
        formTitle: "Верификационный код",
        formSubtitle:
          "Введите верификационный код, отправленный на {{identifier}}",
        resendButton: "Отправить код повторно",
        successMessage:
          "Адрес электронной почты {{identifier}} был добавлен в ваш аккаунт.",
      },
      emailLink: {
        formHint:
          "На этот адрес электронной почты будет отправлена верификационная ссылка.",
        formTitle: "Верификационная ссылка",
        formSubtitle:
          "Нажмите на верификационную ссылку в письме, отправленном на {{identifier}}",
        resendButton: "Отправить ссылку повторно",
        successMessage:
          "Адрес электронной почты {{identifier}} был добавлен в ваш аккаунт.",
      },
      removeResource: {
        title: "Удалить адрес электронной почты",
        messageLine1: "{{identifier}} будет удален из этого аккаунта.",
        messageLine2:
          "Вы больше не сможете войти с использованием этого адреса электронной почты.",
        successMessage: "{{emailAddress}} был удален из вашего аккаунта.",
      },
    },
    phoneNumberPage: {
      title: "Добавить номер телефона",
      successMessage: "{{identifier}} был добавлен к вашей учетной записи.",
      infoText:
        "На этот номер телефона будет отправлено текстовое сообщение с верификационной ссылкой.",
      infoText__secondary: "Могут быть применены тарифы на сообщения и данные.",
      removeResource: {
        title: "Удалить номер телефона",
        messageLine1: "{{identifier}} будет удален из этой учетной записи.",
        messageLine2:
          "Вы больше не сможете войти, используя этот номер телефона.",
        successMessage: "{{phoneNumber}} был удален из вашей учетной записи.",
      },
    },
    connectedAccountPage: {
      title: "Добавить подключенный аккаунт",
      formHint: "Выберите провайдера для подключения вашего аккаунта.",
      formHint__noAccounts: "Нет доступных провайдеров внешних аккаунтов.",
      socialButtonsBlockButton: "Подключить аккаунт {{provider|titleize}}",
      successMessage: "Провайдер был добавлен в ваш аккаунт",
      removeResource: {
        title: "Удалить подключенный аккаунт",
        messageLine1: "{{identifier}} будет удален из вашего аккаунта.",
        messageLine2:
          "Вы больше не сможете использовать этот подключенный аккаунт, и любые зависимые функции больше не будут работать.",
        successMessage: "{{connectedAccount}} был удален из вашего аккаунта.",
      },
    },
    web3WalletPage: {
      title: "Добавить web3 кошелек",
      subtitle__availableWallets:
        "Выберите web3 кошелек для подключения к вашей учетной записи.",
      subtitle__unavailableWallets: "Нет доступных web3 кошельков.",
      successMessage: "Кошелек был добавлен к вашей учетной записи.",
      removeResource: {
        title: "Удалить web3 кошелек",
        messageLine1: "{{identifier}} будет удален из этой учетной записи.",
        messageLine2:
          "Вы больше не сможете Войти с использованием этого web3 кошелька.",
        successMessage: "{{web3Wallet}} был удален из вашей учетной записи.",
      },
    },
    passwordPage: {
      title: "Установить пароль",
      changePasswordTitle: "Изменить пароль",
      successMessage: "Ваш пароль установлен.",
      changePasswordSuccessMessage: "Ваш пароль был обновлен.",
      sessionsSignedOutSuccessMessage:
        "Все другие устройства были выведены из системы.",
    },
    mfaPage: {
      title: "Добавить двухфакторную аутентификацию",
      formHint: "Выберите метод для добавления.",
    },
    mfaTOTPPage: {
      title: "Добавить приложение аутентификации",
      verifyTitle: "Верификационный код",
      verifySubtitle:
        "Введите верификационный код, созданный вашим приложением аутентификации",
      successMessage:
        "Двухэтапная проверка в настоящее время включена. При входе в систему вам нужно будет ввести верификационный код из этого приложения в качестве дополнительного шага.",
      authenticatorApp: {
        infoText__ableToScan:
          "Настройте новый метод входа в вашем приложении аутентификации и отсканируйте следующий QR-код, чтобы связать его с вашей учетной записью.",
        infoText__unableToScan:
          "Настройте новый метод входа в вашем приложении аутентификации и введите ниже предоставленный ключ.",
        inputLabel__unableToScan1:
          "Убедитесь, что включены одноразовые пароли на основе времени, затем завершите связывание своей учетной записи.",
        inputLabel__unableToScan2:
          "Кроме того, если ваше приложение аутентификации поддерживает URI TOTP, вы также можете скопировать полный URI.",
        buttonAbleToScan__nonPrimary: "Вместо этого отсканируйте QR-код",
        buttonUnableToScan__nonPrimary: "Не удается отсканировать QR-код?",
      },
      removeResource: {
        title: "Удаление двухэтапной аутентификации",
        messageLine1:
          "Верификационный код из этого приложения аутентификации больше не потребуется при входе в систему.",
        messageLine2:
          "Ваш аккаунт будет менее защищенным. Вы уверены, что хотите продолжить?",
        successMessage:
          "Двухэтапная аутентификация через приложение аутентификации была удалена.",
      },
    },
    mfaPhoneCodePage: {
      title: "Добавить проверку кодом из SMS",
      primaryButton__addPhoneNumber: "Добавить номер телефона",
      subtitle__availablePhoneNumbers:
        "Выберите номер телефона для регистрации в двухэтапной проверке с кодом из SMS.",
      subtitle__unavailablePhoneNumbers:
        "Нет доступных номеров телефона для регистрации в двухэтапной проверке с кодом из SMS.",
      successMessage:
        "Двухэтапная проверка с кодом из SMS включена для этого номера телефона. При входе в систему вам нужно будет ввести код подтверждения, отправленный на этот номер телефона в качестве дополнительного шага.",
      removeResource: {
        title: "Удалить двухэтапную проверку",
        messageLine1:
          "{{identifier}} больше не будет получать коды подтверждения при входе в систему.",
        messageLine2:
          "Ваша учетная запись будет менее защищенной. Вы уверены, что хотите продолжить?",
        successMessage:
          "Двухэтапная проверка с кодом из SMS была удалена для {{mfaPhoneCode}}",
      },
    },
    backupCodePage: {
      title: "Добавить резервный код подтверждения",
      title__codelist: "Резервные коды",
      subtitle__codelist: "Храните их в безопасности и не сообщайте никому.",
      infoText1: "Резервные коды будут включены для этой учетной записи.",
      infoText2:
        "Храните резервные коды в тайне и храните их в безопасности. Вы можете создать новые резервные коды, если подозреваете, что они были скомпрометированы.",
      successSubtitle:
        "Вы можете использовать один из этих кодов для входа в свою учетную запись, если вы потеряете доступ к своему аутентификационному устройству.",
      successMessage:
        "Резервные коды включены. Вы можете использовать один из этих кодов для входа в свою учетную запись, если вы потеряете доступ к своему аутентификационному устройству. Каждый код может быть использован только один раз.",
      actionLabel__copy: "Копировать все",
      actionLabel__copied: "Скопировано!",
      actionLabel__download: "Скачать .txt",
      actionLabel__print: "Печать",
    },
  },
  userButton: {
    action__manageAccount: "Управление аккаунтом",
    action__signOut: "Выйти",
    action__signOutAll: "Выйти из всех аккаунтов",
    action__addAccount: "Добавить аккаунт",
  },
  organizationSwitcher: {
    personalWorkspace: "Личное рабочее пространство",
    notSelected: "Организация не выбрана",
    action__createOrganization: "Создать организацию",
    action__manageOrganization: "Управление организацией",
  },
  impersonationFab: {
    title: "Вы вошли как {{identifier}}",
    action__signOut: "Выйти",
  },
  organizationProfile: {
    start: {
      headerTitle__members: "Участники",
      headerTitle__settings: "Настройки",
      headerSubtitle__members: "Просмотр и управление участниками организации",
      headerSubtitle__settings: "Управление настройками организации",
    },
    profilePage: {
      title: "Профиль организации",
      subtitle: "Управление профилем организации",
      successMessage: "Организация была обновлена.",
      dangerSection: {
        title: "Опасность",
        leaveOrganization: {
          title: "Покинуть организацию",
          messageLine1:
            "Вы уверены, что хотите покинуть эту организацию? Вы потеряете доступ к этой организации и ее приложениям.",
          messageLine2: "Это действие является постоянным и необратимым.",
          successMessage: "Вы покинули организацию.",
        },
      },
    },
    invitePage: {
      title: "Пригласить участников",
      subtitle: "Пригласите новых участников в эту организацию",
      successMessage: "Приглашения успешно отправлены",
      detailsTitle__inviteFailed:
        "Приглашения не удалось отправить. Исправьте следующее и повторите попытку:",
      formButtonPrimary__continue: "Отправить приглашения",
    },
    membersPage: {
      detailsTitle__emptyRow: "Нет участников для отображения",
      action__invite: "Пригласить",
      start: {
        headerTitle__active: "Активные",
        headerTitle__invited: "Приглашенные",
      },
      activeMembersTab: {
        tableHeader__user: "Пользователь",
        tableHeader__joined: "Присоединился",
        tableHeader__role: "Роль",
        tableHeader__actions: "",
        menuAction__remove: "Удалить участника",
      },
      invitedMembersTab: {
        tableHeader__invited: "Приглашенные",
        menuAction__revoke: "Отозвать приглашение",
      },
    },
  },
  createOrganization: {
    title: "Создать организацию",
    formButtonSubmit: "Создать организацию",
    subtitle: "Настройка профиля организации",
    invitePage: {
      formButtonReset: "Пропустить",
    },
  },
  unstable__errors: {
    form_identifier_not_found: "",
    form_password_pwned:
      "Этот пароль был взломан и не может быть использован, попробуйте другой пароль.",
    form_password_validation_failed: "Неверный пароль",
    form_password_not_strong_enough: "Ваш пароль недостаточно надежный.",
    form_password_size_in_bytes_exceeded:
      "Ваш пароль превышает максимально допустимое количество байтов, сократите его или удалите некоторые специальные символы.",
    form_username_invalid_length: "",
    form_username_invalid_character: "",
    form_param_format_invalid: "",
    form_password_length_too_short: "",
    form_param_nil: "",
    form_code_incorrect: "",
    form_password_incorrect: "",
    not_allowed_access: "",
    form_identifier_exists: "",
    passwordComplexity: {
      sentencePrefix: "Ваш пароль должен содержать",
      minimumLength: "{{length}} или более символов",
      maximumLength: "менее {{length}} символов",
      requireNumbers: "цифру",
      requireLowercase: "букву в нижнем регистре",
      requireUppercase: "букву в верхнем регистре",
      requireSpecialCharacter: "специальный символ",
    },
    zxcvbn: {
      notEnough: "Ваш пароль недостаточно надежный.",
      couldBeStronger:
        "Ваш пароль подходит, но мог бы быть надежнее. Попробуйте добавить больше символов.",
      goodPassword: "Хорошая работа. Это отличный пароль.",
      warnings: {
        straightRow: "Прямые ряды клавиш на клавиатуре легко угадать.",
        keyPattern: "Короткие сочетания клавиш легко угадать.",
        simpleRepeat: 'Повторяющиеся символы, такие как "aaa", легко угадать.',
        extendedRepeat:
          'Повторяющиеся шаблоны символов, такие как "abcabcabc", легко угадать.',
        sequences:
          'Частые последовательности символов, такие как "abc", легко угадать.',
        recentYears: "Последние годы легко угадать.",
        dates: "Даты легко угадать.",
        topTen: "Это очень часто используемый пароль.",
        topHundred: "Это часто используемый пароль.",
        common: "Это распространенный пароль.",
        similarToCommon: "Этот пароль похож на часто используемый пароль.",
        wordByItself: "Отдельные слова легко угадать.",
        namesByThemselves: "Одни имена или фамилии легко угадать.",
        commonNames: "Распространенные имена и фамилии легко угадать.",
        userInputs:
          "Не должно быть никаких личных данных или данных, связанных со страницей.",
        pwned: "Ваш пароль был раскрыт в результате утечки данных в Интернете.",
      },
      suggestions: {
        l33t: "Избегайте предсказуемых замен букв, таких как «@» вместо «a».",
        reverseWords: "Избегайте обратного написания часто используемых слов.",
        allUppercase: "Делайте заглавными некоторые, но не все буквы.",
        capitalization: "Делайте заглавными не только первую букву",
        dates: "Избегайте дат и лет, которые связаны с вами.",
        recentYears: "Избегайте последних лет.",
        associatedYears: "Избегайте лет, которые связаны с вами.",
        sequences: "Избегайте частых последовательностей символов.",
        repeated: "Избегайте повторяющихся слов и символов.",
        longerKeyboardPattern:
          "Используйте более длинные сочетания клавиш и несколько раз меняйте направление ввода.",
        anotherWord: "Добавьте больше слов, которые менее распространены.",
        useWords:
          "Используйте несколько слов, но избегайте распространенных фраз.",
        noNeed:
          "Вы можете создавать надежные пароли без использования символов, цифр или заглавных букв.",
        pwned:
          "Если вы используете этот пароль в другом месте, вам следует изменить его.",
      },
    },
  },
  dates: {
    previous6Days:
      "Последний {{ date | weekday('ru-RU','long') }} в {{ date | timeString('ru-RU') }}",
    lastDay: "Вчера в {{ date | timeString('ru-RU') }}",
    sameDay: "Сегодня в {{ date | timeString('ru-RU') }}",
    nextDay: "Завтра в {{ date | timeString('ru-RU') }}",
    next6Days:
      "{{ date | weekday('ru-RU','long') }} в {{ date | timeString('ru-RU') }}",
    numeric: "{{ date | numeric('ru-RU') }}",
  },
} as const;