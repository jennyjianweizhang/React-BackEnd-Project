// ** Next Import, enable components to be loaded only when needed
import dynamic from 'next/dynamic'

// ! To avoid 'Window is not defined' error
const ReactApexcharts = dynamic(() => import('react-apexcharts'), { ssr: false })

export default ReactApexcharts

// ssr: false: disables server-side rendering for the imported module. SSR means rendering components on the server and sending the rendered HTML to the client. However, some modules, especially those that rely on browser-specific objects like window, can cause issues when rendered on the server because these objects are not available there.
