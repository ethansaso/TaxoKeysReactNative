import { Header } from "@rneui/base";

type TKHeaderProps = {
    title: string;
  };

const TKHeader: React.FC<TKHeaderProps> = ({ title }) => {
  return (
    <Header
        leftComponent={{ icon: 'menu', color: '#000' }}
        containerStyle={{ backgroundColor: 'white' }}
        centerContainerStyle={{ justifyContent: 'center' }}
        centerComponent={{ text: title, style: { color: '#000', fontSize: 18, fontFamily: 'Montserrat', fontWeight: 700 }}}
    />
  );
};

export default TKHeader;
