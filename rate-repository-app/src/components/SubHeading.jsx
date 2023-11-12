import Text from './Text';


const SubHeading = ({ ...props }) => {
    return <Text fontSize="subheading" fontWeight="bold" {...props} />;
};

export default SubHeading;