import {
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  Grid,
  Typography,
  FormControlLabel
} from '@material-ui/core';

const MetaEditorFormInput = (props) => (
  <form {...props}>
    <Card>
      <CardHeader
        subheader="Paste or type your json here"
        title="Meta Editor"
      />
      <Divider />
      <CardContent>
        <Grid
          container
          spacing={6}
          wrap="wrap"
        >
          <Grid
            item
            md={4}
            sm={6}
            sx={{
              display: 'flex',
              flexDirection: 'column'
            }}
            xs={12}
          >
            <Typography
              color="textPrimary"
              gutterBottom
              variant="h6"
            >
              Notifications
            </Typography>
            <FormControlLabel
              control={(
                <Checkbox
                  color="primary"
                  defaultChecked
                />
              )}
              label="Email"
            />
          </Grid>
          <Grid
            item
            md={4}
            sm={6}
            sx={{
              display: 'flex',
              flexDirection: 'column'
            }}
            xs={12}
          >
            <Typography
              color="textPrimary"
              gutterBottom
              variant="h6"
            >
              Messages
            </Typography>
            <FormControlLabel
              control={(
                <Checkbox
                  color="primary"
                  defaultChecked
                />
              )}
              label="Email"
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  </form>
);

export default MetaEditorFormInput;
