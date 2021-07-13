import React from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskListContextProvider from './contexts/TaskListContext';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: 'dark',
        },
      }),
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <TaskListContextProvider>
        <div className="container">
          <TaskForm />
          <TaskList />
        </div>
      </TaskListContextProvider>
    </ThemeProvider>
  );
}

export default App;
