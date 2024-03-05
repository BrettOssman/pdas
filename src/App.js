//import ProfileCard from './ProfileCard';
import BrightText from './BrightText';

function App() {
    // return (
    //    <div>
    //        <div>Personal Digital Assistants</div>
    //        <ProfileCard title = "Alexa" handle = "@alexa99" />
    //        <ProfileCard title = "Cortana" handle = "@cortana32" />
    //        <ProfileCard title = "Siri" handle = "@siri01" />
    //    </div>
    //);
    return (
        <div>
            <div>Bright Text</div>
            <BrightText color = "red" />
            <BrightText color = "green" />
            <BrightText color = "blue" />
        </div>
    );
}

export default App;
