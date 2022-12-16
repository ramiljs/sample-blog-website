import { FC } from "react";
import "./home.style.css";
import { liStyle , networksLinkStyle , userInfoStyle } from "./home.style";
import { Link , Text , Divider , Badge , Image } from "@chakra-ui/react";
import user from "../../assets/iamdev.jpg";

export const Home: FC = () => {
  return (
    <div className="home">
      <div className="home-banner" style={userInfoStyle}>
        <div className="names">
          <Text
            bgGradient="linear(to-r, teal.500, green.500)"
            bgClip="text"
            fontSize="4xl"
            fontWeight="extrabold"
          >
            Ramil Kamalov
          </Text>
          <Badge as="kbd" variant="outline" colorScheme="green">
            Web developer
          </Badge>
        </div>
        <div className="MyImages">
          <Image
            borderRadius="full"
            boxSize="200px"
            src={user}
            alt="Ramil Kamalov"
          />
        </div>
      </div>
      <Divider sx={{ margin: "100px 0 50px 0" }} />
      <div className="network-links" style={networksLinkStyle}>
        <ul>
          <li style={liStyle}>
            <Link 
              href="https://www.linkedin.com/in/ramildeveloper" 
              color="teal.500"
            >
              LinkedIn
            </Link>
          </li>
          <li style={liStyle}>
            <Link 
              href="https://twitter.com/ramildeveloper" 
              color="teal.500"
            >
              Twitter
            </Link>
          </li>
        </ul>
        <ul>
          <li style={liStyle}>
            <Link 
              href="https://github.com/kamalovvvv" 
              color="teal.500"
            >
              GitHub
            </Link>
          </li>
          <li style={liStyle}>
            <Link 
              href="https://www.instagram.com/ramilkamalov_" 
              color="teal.500"
            >
              Facebook
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}