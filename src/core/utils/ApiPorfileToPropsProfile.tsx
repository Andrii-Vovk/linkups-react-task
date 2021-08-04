import { ProfileAnswer } from "../../typings/ProfileAnswer";
import { ProfileCardProps } from "../../ui/components/ProfileCard/ProfileCard";

function ApiProfieToPropsProfile(
    profile: ProfileAnswer,
    variant: "Homepage" | "Profilepage"
  ): ProfileCardProps {
    let ConvertedProfile: ProfileCardProps | null = null;
  
    let convertedName = "";
    if (profile?.firstName) convertedName += profile?.firstName;
    if (profile?.lastName) convertedName += profile?.lastName;
    if (!profile?.firstName && !profile?.lastName)
      convertedName = "Unnamed Profile";
  
    const convertedAvatar = profile?.profilePhotoUrl
      ? {
          url: profile?.profilePhotoUrl,
          bordered: true,
          withPlus: true,
          style: { height: 88, width: 88 },
        }
      : {
          url: "https://via.placeholder.com/88",
          bordered: true,
          withPlus: true,
          style: { height: 88, width: 88 },
        };
  
    if (profile) {
      ConvertedProfile = {
        props: {
          followers: profile.followers,
          following: profile.following,
          name: convertedName,
          interest: profile.jobTitle,
          about: profile.description,
          avatar: convertedAvatar,
        },
        variant,
      };
    }
  
    return ConvertedProfile as ProfileCardProps;
  }

export default ApiProfieToPropsProfile;