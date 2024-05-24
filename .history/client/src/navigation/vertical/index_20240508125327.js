import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
import Email from 'mdi-material-ui/Email'
import Chat from 'mdi-material-ui/Chat'
import Calendar from 'mdi-material-ui/Calendar'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'

const navigation = () => {
  return [
    {
      title: 'Dashboards',
      icon: HomeOutline,
      path: '/dashboard',
      children: [
        {
          title: 'Analytics',
          dot: true,
          path: '/dashboard/analytics',
        },
        {
          title: 'CRM',
          dot: true,
          path: '/dashboard/crm',
        },
        {
          title: 'eCommerce',
          dot: true,
          path: '/dashboard/ecommerce',
        }
      ]
    },
    {
      title: 'Account Settings',
      icon: AccountCogOutline,
      path: '/account-settings'
    },
    {
      sectionTitle: 'App & Pages'
    },
    {
      title: 'Email',
      icon: Email,
      path: '/email',
      // openInNewTab: true
    },
    {
      title:'Chat',
      icon: Chat,
      path: '/chat',
    },
    {
      title:'Calendar',
      icon: Calendar,
      path: '/calendar',
    },
    {
      title: 'Invoice',
      icon: HomeOutline,
      path: '/invoice/list',
      children: [
        {
          title: 'List',
          dot: true,
          path: '/invoice/list',
        },
        {
          title: 'Preview',
          dot: true,
          path: '/invoice/preview',
        },
        {
          title: 'Edit',
          dot: true,
          path: '/invoice/edit',
        },
        {
          title: 'Edit',
          dot: true,
          path: '/invoice/edit',
        },
      ]
    },
    {
      title: 'Login',
      icon: Login,
      path: '/',
      openInNewTab: true
    },
    {
      title: 'Register',
      icon: AccountPlusOutline,
      path: '/pages/register',
      openInNewTab: true
    },
    {
      title: 'Error',
      icon: AlertCircleOutline,
      path: '/pages/error',
      openInNewTab: true
    },
    {
      sectionTitle: 'User Interface'
    },
    {
      title: 'Typography',
      icon: FormatLetterCase,
      path: '/typography'
    },
    {
      title: 'Icons',
      path: '/icons',
      icon: GoogleCirclesExtended
    },
    {
      title: 'Cards',
      icon: CreditCardOutline,
      path: '/cards'
    },
    {
      title: 'Tables',
      icon: Table,
      path: '/tables'
    },
    {
      icon: CubeOutline,
      title: 'Form Layouts',
      path: '/form-layouts'
    }
  ]
}

export default navigation
