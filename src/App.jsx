import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { addNewPackage, lastCheckpoint } from './utilities/api';

<<<<<<< Updated upstream
import { useDbData } from "./utilities/firebase.js";
=======
import { useDbData } from "./utilities/firebase";
import { useAuthState } from "./utilities/firebase";
>>>>>>> Stashed changes
import Main from "./components/Main";


const App = () => {
  const [user] = useAuthState();
  console.log(user);
  const uid = user?.uid ? user.uid : "12345678";


	const [userData, error] = useDbData(`/users/${uid}`);
	const [imageData, imageError] = useDbData(`/images`);

	if (error) return <h1>Error loading data: {error.toString()}</h1>;
	if (userData === undefined) return <h1>Loading data...</h1>;
	if (!userData) return <h1>No data found</h1>;

	// if package already created, will give you a 400 bad request
	// addNewPackage('TBA303524937082', 'amazon').then(data => console.log(data));
	// lastCheckpoint('kmz8zwcgy8s1ul9yuqw2001h').then(data => console.log(data));



	if (imageError) return <h1>Error loading data: {imageError.toString()}</h1>;
	if (imageData === undefined) return <h1>Loading data...</h1>;
	if (!imageData) return <h1>No data found</h1>;

	return (
		<div className="background">
			<Main userData={userData} imageData={imageData}></Main>
		</div>
	);
};

export default App;
