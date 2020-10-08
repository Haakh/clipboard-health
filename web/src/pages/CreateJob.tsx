import React, {useEffect} from 'react';
import {Grid, Typography, CircularProgress} from '@material-ui/core';

import {Formik} from 'formik';

import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';

import {colors} from 'styles/colors';
import {Button, Input} from 'components';
import {Autocomplete} from '@material-ui/lab';
import {RoutePath} from 'types/routes';
import {useHistory} from 'react-router-dom';
import {useAppDispatch, useAppState} from 'store';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexDirection: 'column',
      marginTop: theme.spacing(4),
      maxWidth: 1200,
      backgroundColor: colors.offWhite,
      paddingBottom: theme.spacing(4),
    },
    title: {
      fontSize: theme.spacing(6),
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      fontWeight: 400,
    },
  }),
);

export interface FormValues {
  jobTitle: string;
  description: string;
  salaryStart: string;
  salaryEnd: string;
  jobForm: string;
  currency: string;
  location: string;
  shiftHours: string;
  shiftSchedule: string;
  jobType: string;
  ratio: string;
  degreeRequirement: string;
  workExperience: string;
}

export const CreateJob: React.FC = props => {
  const classes = useStyles(props);
  const history = useHistory();
  const setState = useAppDispatch();
  const {jobs, ...state} = useAppState();

  const initialValues: FormValues = {
    jobTitle: '',
    description: '',
    salaryStart: '',
    salaryEnd: '',
    jobForm: '',
    currency: '',
    location: '',
    shiftHours: '',
    shiftSchedule: '',
    jobType: '',
    ratio: '',
    degreeRequirement: '',
    workExperience: '',
  };

  useEffect(() => {});

  const onSubmit = (values: FormValues) => {
    const newJobs = [...jobs];
    newJobs.push(values);
    setState({...state, jobs: newJobs});
    history.push(RoutePath.SearchJob);
  };

  return (
    <Grid container justify="center" alignItems="center" className={classes.root}>
      <Grid item xs={12} md={10} lg={9}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h4" className={classes.title}>
              Post a Job for Sarvodaya Hospital
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Formik
            initialValues={initialValues}
            onSubmit={async (values, {setSubmitting}) => {
              setSubmitting(true);
              await onSubmit(values);
              setSubmitting(false);
            }}>
            {props => {
              const {values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit} = props;
              return (
                <form onSubmit={handleSubmit}>
                  <Grid container component="div" alignItems="center" direction="column">
                    <Grid item style={{width: '100%'}}>
                      <Input
                        error={errors.jobTitle && touched.jobTitle}
                        fullWidth={true}
                        name="jobTitle"
                        value={values.jobTitle}
                        defaultValue={values.jobTitle}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={errors.jobTitle && touched.jobTitle && 'Job Title Required'}
                        placeholder="eg. Register Nurse"
                        label="Job Title"
                      />
                    </Grid>

                    <Grid key="DESCRIPTION" item style={{width: '100%'}}>
                      <Input
                        error={errors.jobTitle && touched.jobTitle}
                        fullWidth={true}
                        name="description"
                        value={values.description}
                        defaultValue={values.description}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={errors.description && touched.description && 'Job Title Required'}
                        label="Description"
                        rows={10}
                        multiline
                      />
                    </Grid>

                    <Grid key="SALARY" item style={{width: '100%'}}>
                      <Grid container spacing={2}>
                        <Grid item xs={6} sm={6} md={3}>
                          <Input
                            error={errors.salaryStart && touched.salaryStart}
                            fullWidth={true}
                            name="salaryStart"
                            value={values.salaryStart}
                            defaultValue={values.salaryStart}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={errors.salaryStart && touched.salaryStart && 'Job Title Required'}
                            label="Salary Range"
                          />
                        </Grid>
                        <Grid item xs={6} sm={6} md={3}>
                          <Input
                            error={errors.salaryEnd && touched.salaryEnd}
                            fullWidth={true}
                            name="salaryEnd"
                            value={values.salaryEnd}
                            defaultValue={values.salaryEnd}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={errors.salaryEnd && touched.salaryEnd && 'Job Title Required'}
                          />
                        </Grid>
                        <Grid item xs={6} sm={6} md={3}>
                          <Input
                            error={errors.jobForm && touched.jobForm}
                            fullWidth={true}
                            name="jobForm"
                            value={values.jobForm}
                            defaultValue={values.jobForm}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={errors.jobForm && touched.jobForm && 'Job Title Required'}
                            label="Forms"
                          />
                        </Grid>
                        <Grid item xs={6} sm={6} md={3}>
                          <Input
                            error={errors.currency && touched.currency}
                            fullWidth={true}
                            name="currency"
                            value={values.currency}
                            defaultValue={values.currency}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={errors.currency && touched.currency && 'Job Title Required'}
                            label="Currency"
                          />
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid key="LOCATION" item style={{width: '100%'}}>
                      <Input
                        error={errors.location && touched.location}
                        fullWidth={true}
                        name="location"
                        value={values.location}
                        defaultValue={values.location}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={errors.location && touched.location && 'Job Title Required'}
                        placeholder="eg. San Francisco"
                        label="Location(s)*"
                      />
                    </Grid>

                    <Grid key="SHIFT" item style={{width: '100%'}}>
                      <Grid container spacing={2}>
                        <Grid item xs={6} sm={6} md={4}>
                          <Input
                            error={errors.shiftHours && touched.shiftHours}
                            fullWidth={true}
                            name="shiftHours"
                            value={values.shiftHours}
                            defaultValue={values.shiftHours}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={errors.shiftHours && touched.shiftHours && 'Job Title Required'}
                            label="Shift hours"
                          />
                        </Grid>
                        <Grid item xs={6} sm={6} md={4}>
                          <Input
                            error={errors.shiftSchedule && touched.shiftSchedule}
                            fullWidth={true}
                            name="shiftSchedule"
                            value={values.shiftSchedule}
                            defaultValue={values.shiftSchedule}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={errors.shiftSchedule && touched.shiftSchedule && 'Job Title Required'}
                            label="Shift schedule"
                          />
                        </Grid>
                        <Grid item xs={6} sm={6} md={4}>
                          <Input
                            error={errors.jobType && touched.jobType}
                            fullWidth={true}
                            name="jobType"
                            value={values.jobType}
                            defaultValue={values.jobType}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={errors.jobType && touched.jobType && 'Job Title Required'}
                            label="Job Type"
                          />
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid key="PATIENT" item style={{width: '100%'}}>
                      <Grid container spacing={2}>
                        <Grid item xs={6} sm={6} md={4}>
                          <Input
                            error={errors.ratio && touched.ratio}
                            fullWidth={true}
                            name="ratio"
                            value={values.ratio}
                            defaultValue={values.ratio}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={errors.ratio && touched.ratio && 'Job Title Required'}
                            label="Nurse Patient Ratio"
                          />
                        </Grid>
                        <Grid item xs={6} sm={6} md={4}>
                          <Input
                            error={errors.degreeRequirement && touched.degreeRequirement}
                            fullWidth={true}
                            name="degreeRequirement"
                            value={values.degreeRequirement}
                            defaultValue={values.degreeRequirement}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={errors.degreeRequirement && touched.degreeRequirement && 'Job Title Required'}
                            label="Degree Requirement"
                          />
                        </Grid>
                        <Grid item xs={6} sm={6} md={4}>
                          <Input
                            error={errors.workExperience && touched.workExperience}
                            fullWidth={true}
                            name="workExperience"
                            value={values.workExperience}
                            defaultValue={values.workExperience}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={errors.workExperience && touched.workExperience && 'Job Title Required'}
                            label="Work experience requirement"
                          />
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid item style={{width: '100%'}}>
                      <Autocomplete
                        multiple
                        id="tags-standard"
                        options={['Wound Care', 'Orthopaedic', 'Oncology']}
                        getOptionLabel={option => option}
                        defaultValue={['Wound Care']}
                        renderInput={params => (
                          <Input {...params} variant="standard" label="Multiple values" placeholder="Favorites" />
                        )}
                      />
                    </Grid>

                    <Grid item style={{width: '100%'}}>
                      <div style={{border: '0.5px solid #E1E1E1', marginTop: 40, marginBottom: 40}} />
                    </Grid>

                    <Grid item style={{width: '100%'}}>
                      <Grid container>
                        <Grid item xs={12} md={6} justify="center" alignItems="center">
                          <Typography>You currently have 4 active job listings</Typography>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          md={6}
                          style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
                          <Button variant="outlined">
                            <Typography variant="h4">Cancel</Typography>
                          </Button>
                          <Button type="submit" disabled={isSubmitting} style={{backgroundColor: colors.blue}}>
                            {isSubmitting ? <CircularProgress /> : 'Save'}
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </form>
              );
            }}
          </Formik>
        </Grid>
      </Grid>
    </Grid>
  );
};
