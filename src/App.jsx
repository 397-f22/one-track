import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { useDbData } from "./utilities/firesbase";
import Main from "./components/Main";

// temporary and should be changed when we add more users
const uid = "12345678";

const App = () => {
	const [userData, error] = useDbData(`/users/${uid}`);
	const [imageData, imageError] = useDbData(`/images`);

	if (error) return <h1>Error loading data: {error.toString()}</h1>;
	if (userData === undefined) return <h1>Loading data...</h1>;
	if (!userData) return <h1>No data found</h1>;

	
	if (imageError) return <h1>Error loading data: {imageError.toString()}</h1>;
	if (imageData === undefined) return <h1>Loading data...</h1>;
	if (!imageData) return <h1>No data found</h1>;

	return (
		<Main userData={userData} imageData={imageData}></Main>
	);
};

export default App;