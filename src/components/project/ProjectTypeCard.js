import PropTypes from 'prop-types';
import {
  Avatar, Box, Card, CardContent, Typography
} from '@material-ui/core';

const ProjectTypeCard = ({ projectType, ...rest }) => (
  <Card
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}
    {...rest}
  >
    <CardContent>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          pb: 3
        }}
      >
        <Avatar alt="Project Type" src={projectType.media} variant="square" />
      </Box>
      <Typography align="center" color="textPrimary" gutterBottom variant="h4">
        {projectType.title}
      </Typography>
      <Typography align="center" color="textPrimary" variant="body1">
        {projectType.description}
      </Typography>
    </CardContent>
  </Card>
);

ProjectTypeCard.propTypes = {
  projectType: PropTypes.object.isRequired
};

export default ProjectTypeCard;
