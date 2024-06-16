import { RouterProvider } from 'react-router-dom';

import { router } from './routes/routes';
import CustomLayout from './components/layout/CustomLayout';

function App() {
    return (
        <>
            <CustomLayout>
                <RouterProvider router={router} />
            </CustomLayout>
        </>
    );
}

export default App;
