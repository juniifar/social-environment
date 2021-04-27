import PropTypes from 'prop-types';
import {
  Grid, Card, CardContent, Typography, Avatar
} from '@material-ui/core';
import { orange } from '@material-ui/core/colors';
import InsertChartIcon from '@material-ui/icons/InsertChartOutlined';

const ProjectTypeGrid = ({ projectType, ...rest }) => (
  <Grid
    item
    lg={4}
    sm={6}
    xl={4}
    xs={12}
    {...rest}
  >
    <Card
      sx={{ height: '100%' }}
    >
      <CardContent>
        <Grid
          container
          spacing={3}
          sx={{ justifyContent: 'space-between' }}
        >
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
              {projectType.title}
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
            >
              {projectType.total}
              {' '}
              Projects
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: orange[600],
                height: 56,
                width: 56
              }}
            >
              <InsertChartIcon />
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>

    </Card>

  </Grid>
);

ProjectTypeGrid.propTypes = {
  projectType: PropTypes.object.isRequired
};

export default ProjectTypeGrid;
