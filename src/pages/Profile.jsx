import { useParams } from "react-router-dom";

const Profile = () => {
    const { id } = useParams();
    return (
        <div>
            <Heading as="h1" className="text-center">
                Профиль
            </Heading>
        </div>
    );
};

export default Profile;
