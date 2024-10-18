import './App.css';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { FormPage } from "./pages/FormPage";



function App() {
  return (
    <MantineProvider theme={{}}>
      <div
        style={{ fontSize: '28px', fontWeight: 'bold' }}>
        {"WeekX 針對在職班同學報告評分"}

      </div>
      <FormPage />
    </MantineProvider>




  )
}

export default App;
