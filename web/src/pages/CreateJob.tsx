import React, {useEffect} from 'react';
import {Grid, Typography, CircularProgress, InputAdornment, Select, MenuItem, FormLabel} from '@material-ui/core';

import {Formik} from 'formik';
import * as Yup from 'yup';

import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';

import {colors} from 'styles/colors';
import {BootstrapInput, Button, Input} from 'components';
import {Autocomplete} from '@material-ui/lab';
import {RoutePath} from 'types/routes';
import {useHistory} from 'react-router-dom';
import {useAppDispatch, useAppState} from 'store';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    createJobRoot: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexDirection: 'column',
      marginTop: theme.spacing(4),
      maxWidth: 1200,
      backgroundColor: colors.offWhite,
      paddingBottom: theme.spacing(4),
      [theme.breakpoints.down('md')]: {
        padding: theme.spacing(4),
      },
    },
    container: {
      width: '70%',
      [theme.breakpoints.down('md')]: {
        width: '100%',
      },
    },
    title: {
      fontSize: theme.spacing(6),
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      fontWeight: 400,
    },
    formButtons: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      [theme.breakpoints.down('md')]: {
        justifyContent: 'flex-start',
        marginTop: theme.spacing(5),
      },
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
    window.scrollTo(0, 0);
  };

  const validationSchema = Yup.object().shape({
    jobTitle: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required(),
    description: Yup.string().min(2, 'Too Short!').max(1000, 'Too Long!').required(),
    salaryStart: Yup.number().required(),
    salaryEnd: Yup.number().required(),
    location: Yup.string().required(),
  });

  return (
    <Grid container justify="center" alignItems="center" className={classes.createJobRoot}>
      <Grid item xs={12} md={10} lg={9} className={classes.container}>
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
            }}
            validationSchema={validationSchema}>
            {props => {
              const {values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit} = props;
              return (
                <form onSubmit={handleSubmit} style={{width: '100%'}}>
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
                        helperText={errors.jobTitle && touched.jobTitle && 'This is a required field'}
                        placeholder="eg. Register Nurse"
                        label="Job Title*"
                      />
                    </Grid>

                    <Grid key="DESCRIPTION" item style={{width: '100%'}}>
                      <Input
                        error={errors.description && touched.description}
                        fullWidth={true}
                        name="description"
                        value={values.description}
                        defaultValue={values.description}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={errors.description && touched.description && 'This is a required field'}
                        label="Description*"
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
                            helperText={errors.salaryStart && touched.salaryStart && 'This is a required field'}
                            label="Salary Range*"
                            type="number"
                            InputProps={{
                              startAdornment: <InputAdornment position="start">$</InputAdornment>,
                            }}
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
                            helperText={errors.salaryEnd && touched.salaryEnd && 'This is a required field'}
                            type="number"
                            InputProps={{
                              startAdornment: <InputAdornment position="start">$</InputAdornment>,
                            }}
                          />
                        </Grid>
                        <Grid item xs={6} sm={6} md={3}>
                          <div style={{marginTop: 16, marginBottom: 8}}>
                            <FormLabel color="secondary" style={{fontSize: 14}}>
                              Forms
                            </FormLabel>
                          </div>
                          <Select
                            labelId="jobForm"
                            name="jobForm"
                            id="jobForm"
                            value={values.jobForm}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            label="Forms"
                            fullWidth={true}
                            input={<BootstrapInput />}>
                            <MenuItem value={10}>Hourly</MenuItem>
                            <MenuItem value={20}>Weekly</MenuItem>
                            <MenuItem value={30}>Monthly</MenuItem>
                          </Select>
                        </Grid>
                        <Grid item xs={6} sm={6} md={3}>
                          <div style={{marginTop: 16, marginBottom: 8}}>
                            <FormLabel color="secondary" style={{fontSize: 14}}>
                              Currency
                            </FormLabel>
                          </div>
                          <Select
                            labelId="currency"
                            name="currency"
                            id="currency"
                            value={values.currency}
                            onChange={handleChange}
                            label="currency"
                            fullWidth={true}
                            input={<BootstrapInput />}>
                            <MenuItem value={10}>USD</MenuItem>
                            <MenuItem value={20}>INR</MenuItem>
                            <MenuItem value={30}>Euro</MenuItem>
                          </Select>
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
                        helperText={errors.location && touched.location && 'This is a required field'}
                        placeholder="eg. San Francisco"
                        label="Location(s)*"
                      />
                    </Grid>

                    <Grid key="SHIFT" item style={{width: '100%'}}>
                      <Grid container spacing={2}>
                        <Grid item xs={6} sm={6} md={4}>
                          <div style={{marginTop: 16, marginBottom: 8}}>
                            <FormLabel color="secondary" style={{fontSize: 14}}>
                              Shift hours
                            </FormLabel>
                          </div>
                          <Select
                            labelId="shiftHours"
                            name="shiftHours"
                            id="shiftHours"
                            value={values.shiftHours}
                            onChange={handleChange}
                            label="shiftHours"
                            fullWidth={true}
                            input={<BootstrapInput />}>
                            <MenuItem value={10}>AM</MenuItem>
                            <MenuItem value={20}>PM</MenuItem>
                            <MenuItem value={30}>Custom</MenuItem>
                          </Select>
                          {/* <Autocomplete
                            id="combo-box-demo"
                            options={['top100Films']}
                            getOptionLabel={option => option}
                            style={{width: 300}}
                            renderInput={params => <Input {...params} label="Combo box" />}
                          /> */}
                        </Grid>
                        <Grid item xs={6} sm={6} md={4}>
                          <div style={{marginTop: 16, marginBottom: 8}}>
                            <FormLabel color="secondary" style={{fontSize: 14}}>
                              Shift schedule
                            </FormLabel>
                          </div>
                          <Select
                            labelId="shiftSchedule"
                            name="shiftSchedule"
                            id="shiftSchedule"
                            value={values.shiftSchedule}
                            onChange={handleChange}
                            label="shiftSchedule"
                            fullWidth={true}
                            input={<BootstrapInput />}>
                            <MenuItem value={10}>Schedule 1</MenuItem>
                            <MenuItem value={20}>Schedule 2</MenuItem>
                            <MenuItem value={30}>Schedule 3</MenuItem>
                          </Select>
                        </Grid>
                        <Grid item xs={6} sm={6} md={4}>
                          <div style={{marginTop: 16, marginBottom: 8}}>
                            <FormLabel color="secondary" style={{fontSize: 14}}>
                              Job Type
                            </FormLabel>
                          </div>
                          <Select
                            labelId="jobType"
                            name="jobType"
                            id="jobType"
                            value={values.jobType}
                            onChange={handleChange}
                            label="jobType"
                            fullWidth={true}
                            input={<BootstrapInput />}>
                            <MenuItem value={10}>Type 1</MenuItem>
                            <MenuItem value={20}>Type 2</MenuItem>
                            <MenuItem value={30}>Type 3</MenuItem>
                          </Select>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid key="PATIENT" item style={{width: '100%'}}>
                      <Grid container spacing={2}>
                        <Grid item xs={6} sm={6} md={4}>
                          <div style={{marginTop: 16, marginBottom: 8}}>
                            <FormLabel color="secondary" style={{fontSize: 14}}>
                              Nurse Patient Ratio
                            </FormLabel>
                          </div>
                          <Select
                            labelId="ratio"
                            name="ratio"
                            id="ratio"
                            value={values.ratio}
                            onChange={handleChange}
                            label="ratio"
                            fullWidth={true}
                            input={<BootstrapInput />}>
                            <MenuItem value={10}>Req 1</MenuItem>
                            <MenuItem value={20}>Req 2</MenuItem>
                            <MenuItem value={30}>Req 3</MenuItem>
                          </Select>
                        </Grid>
                        <Grid item xs={6} sm={6} md={4}>
                          <div style={{marginTop: 16, marginBottom: 8}}>
                            <FormLabel color="secondary" style={{fontSize: 14}}>
                              Degree Requirement
                            </FormLabel>
                          </div>
                          <Select
                            labelId="degreeRequirement"
                            name="degreeRequirement"
                            id="degreeRequirement"
                            value={values.degreeRequirement}
                            onChange={handleChange}
                            label="degreeRequirement"
                            fullWidth={true}
                            input={<BootstrapInput />}>
                            <MenuItem value={10}>Req 1</MenuItem>
                            <MenuItem value={20}>Req 2</MenuItem>
                            <MenuItem value={30}>Req 3</MenuItem>
                          </Select>
                        </Grid>
                        <Grid item xs={6} sm={6} md={4}>
                          <div style={{marginTop: 16, marginBottom: 8}}>
                            <FormLabel color="secondary" style={{fontSize: 14}}>
                              Work experience requirement
                            </FormLabel>
                          </div>
                          <Select
                            labelId="workExperience"
                            name="workExperience"
                            id="workExperience"
                            value={values.workExperience}
                            onChange={handleChange}
                            label="workExperience"
                            fullWidth={true}
                            input={<BootstrapInput />}>
                            <MenuItem value={10}>Req 1</MenuItem>
                            <MenuItem value={20}>Req 2</MenuItem>
                            <MenuItem value={30}>Req 3</MenuItem>
                          </Select>
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
                          <Input
                            {...params}
                            variant="standard"
                            label="Skills requirement/preferences"
                            placeholder="Skills (ex: Gastrointestinal)"
                          />
                        )}
                      />
                    </Grid>

                    <Grid item style={{width: '100%', marginTop: 40, marginBottom: 40}}>
                      <div style={{backgroundColor: '#E1E1E1', height: 1}} />
                    </Grid>

                    <Grid item style={{width: '100%', paddingBottom: 110}}>
                      <Grid container>
                        <Grid item xs={12} md={6} style={{display: 'flex', alignItems: 'center'}}>
                          <Typography style={{color: '#7C7C7C'}}>You currently have 4 active job listings</Typography>
                        </Grid>
                        <Grid item xs={12} md={6} className={classes.formButtons}>
                          <Button variant="outlined" style={{width: 70, height: 35}}>
                            <Typography variant="h4">Cancel</Typography>
                          </Button>
                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            style={{height: 35, width: 70, marginLeft: 20, backgroundColor: colors.blue}}>
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
