import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
// import Budget from 'src/components/dashboard/Budget';
import ProjectTypeGrid from 'src/components/dashboardProject/ProjectTypeGrid';
import projectTypes from 'src/__mocks__/projectTypes';

const DashboardProject = () => (
  <>
    <Helmet>
      <title>Dashboard Project | Material Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          {projectTypes.map((projectType) => (
            <ProjectTypeGrid key={projectType.id} projectType={projectType} />
          ))}
          {/* <Grid
            item
            lg={4}
            sm={6}
            xl={4}
            xs={12}
          >
            <Budget />
          </Grid>
          <Grid
            item
            lg={4}
            sm={6}
            xl={4}
            xs={12}
          >
            <Budget />
          </Grid>
          <Grid
            item
            lg={4}
            sm={6}
            xl={4}
            xs={12}
          >
            <Budget />
          </Grid> */}
        </Grid>
      </Container>
    </Box>
  </>
);

export default DashboardProject;
