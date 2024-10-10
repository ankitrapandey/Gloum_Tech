


import React, { useState } from 'react';
import { Typography, Container, TextField, Grid, Button, Card, CardContent, Autocomplete } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import UploadFileIcon from '@mui/icons-material/UploadFile';

const GloumJobDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const [referenceValue, setReferenceValue] = useState([]);

    const jobs = {
        1: {
            title: 'B2B Marketing Specialist',
            description: 'A B2B Marketing Specialist having 1 to 3 years of prior work experience...',
            skills: [
                '1. Strong communication skills and ability to build relationship',
                '2. B2B Marketing',
                '3. Marketing Campaigns',
                '4. Market Research',
                '5. Knowledge of Salesforce (or any other Saas-based company) can be a plus.',
                '6. Demand Generation and Lead Conversion',
                '7. PPC and Paid Campaigns',
                '8. Content Creation',
                '9. Self-starting and competent to work without continual supervision.',
                '10. Passionate about building connections and networking.',
                '11. A curious learner with a growth mindset.',
                '12. Organizational and time-management skills',
                '13. An enthusiastic problem solver',
            ],
            experience: '6 Months - 1 Year',
        
            skills1: [
                '1. Oversee marketing lead generation.',
                '2. Build strategies for targeting specific markets and consumer demographics',
                '3. Contribute towards the development of a sustainable lead generation system',
                '4. Identify and target relevant businesses in order to drive B2B sales and partnerships.',
                '5. Build an extended team and implement an account plan to deliver maximum revenue potential.',
                '6. Perform industry and competitive analysis to inform the sales process and help in positioning and creating messages consistent with the goals of the Growth and Strategy department.',
            ],
            CallUs:'+44 7961 927827',
            MailUs:'gloumtech@gmail.com',
        },
        2: {
            title: 'Associate Software Developer',
            description: 'Associate Software Developer who can help us out with developing, implementing, integrating and managing applications on a broad spectrum of languages like C, C++, Java, Python, Javascript etc.',
            skills: [
                '1. Positive Attitude',
                '2. Quick Learner',
                '3. Strong attention to detail',
                '4. Plays well within a team',
                '5. Strategic and Analytical Thinking',
                '6. Passionate & Dedicated',
                '7. Time-management skills'
            ],
            experience: '6 Months - 1 Year',
            
            skills1: [
                '1. Develop, test and implement new software/applications',
                '2. Quickly produce well-organized, optimized, and documented source code',
                '3. Clearly and regularly communicate with management and colleagues regarding ongoing developments',
                '4. Test, maintain and recommend software/applications improvements',
                '5. Continuously learn and improve skills.',
            ],
            CallUs:'+44 7961 927827',
            MailUs:'gloumtech@gmail.com',
        },
        3: {
            title: 'Business Development Executive (BDE)',
            description: 'BDE required who can help us with generating business through online portals like Upwork, Freelancer and driving company sales by sourcing new clients, and by convincing existing clients.',
            skills: [
                '1. Bachelor s degree is required.',
                'SQL',
                'Excel',
                'Data Visualization',
            ],
            experience: '1 - 2 Years',
           
            skills1: [
                '1. Interpret data and analyze results.',
                '2. Develop and implement data analyses, data collection systems, and other strategies.',
                '3. Work closely with management to prioritize business needs.',
            ],
            CallUs:'+44 7961 927827',
            MailUs:'gloumtech@gmail.com',
        },
        4: {
            title: 'Blockchain Developer',
            description: 'We are looking for a highly capable blockchain developer, who can work on all the Blockchain platforms like Ethereum, Bitcoin,…',
            skills: [
                'Adobe Photoshop',
                'Adobe Illustrator',
                'Creativity',
                'Attention to Detail',
            ],
            experience: '1 - 3 Years',
            location: 'Mumbai',
            skills1: [
                '1. Create visual concepts, by hand or using software.',
                '2. Develop graphics for product illustrations, logos, and websites.',
                '3. Collaborate with the marketing team to define the brand style.',
            ],
            CallUs:'+44 7961 927827',
            MailUs:'gloumtech@gmail.com',
        },
        5: {
            title: 'NodeJS Developer',
            description: 'We are looking for a Node.js Developer who can work on javascript based frameworks and technologies such as ExpressJS,',
            skills: [
                'Communication Skills',
                'Negotiation',
                'Customer Relationship Management',
            ],
            experience: '1 - 2 Years',
            location: 'Delhi',
            skills1: [
                '1. Generate leads and close sales.',
                '2. Develop and maintain relationships with clients.',
                '3. Prepare sales proposals and presentations.',
            ],
            CallUs:'+44 7961 927827',
            MailUs:'gloumtech@gmail.com',
        },
       
    };

    // Convert the id to a number for comparison
    const jobId = Number(id);
    const job = jobs[jobId];

    if (!job) {
        return <Typography variant="h6">Job not found.</Typography>;
    }

    const onSubmit = (data) => {
        console.log(data);
        navigate('/thank-you');
    };

    return (
        <Container style={{ marginTop: '20px' }}>
            <Grid container spacing={4}>
                {/* Job Details Section */}
                <Grid item xs={12} md={6} >
                    <Typography variant="h3" style={{ color: '#00B4D8' }}>{job.title}</Typography>
                    <Typography variant="body1" paragraph style={{ marginTop: '10px', lineHeight: '1.6' }}>{job.description}</Typography>
                    <Typography variant="body1" style={{ marginTop: '20px', }}>Experience: {job.experience}</Typography>

                    <Typography variant="h5" style={{ marginTop: '20px', color: '#212529', fontSize: '24px' }}>What are the key skills required for this job?</Typography>
                    <ul style={{ marginTop: '10px', color: '#212529', fontSize: '16px' }}>
                        {job.skills.map((skill, index) => (
                            <li key={index} style={{ marginBottom: '8px', listStyle: 'none' }}>{skill}</li>
                        ))}
                    </ul>
                    <Typography variant="h5" style={{ marginTop: '20px', color: '#212529', fontSize: '24px' }}>Are you excited to take the responsibilities mentioned below for this role?</Typography>
                    <ul style={{ marginTop: '10px', color: '#212529', fontSize: '16px' }}>
                        {job.skills1 && job.skills1.map((skill, index) => (
                            <li key={index} style={{ marginBottom: '8px', listStyle: 'none' }}>{skill}</li>
                        ))}
                    </ul>
                    <Typography variant='h5' style={{color: '#212529', fontSize: '18px'}}>CallUs: {job.CallUs}</Typography>
                    <Typography variant='h5' style={{color: '#212529', fontSize: '18px'}}>MailUs: {job.MailUs}</Typography>

                </Grid>

                {/* Application Form Section */}
                <Grid item xs={12} md={6} style={{ paddingLeft: '20px' }}>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography variant="h4" style={{ color: '#00B4D8', marginBottom: '20px', textAlign:'center' }}>Apply For Job</Typography>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            label="First Name"
                                            fullWidth
                                            {...register('firstName', { required: 'First name is required' })}
                                            error={!!errors.firstName}
                                            helperText={errors.firstName?.message}
                                            InputLabelProps={{ shrink: true }} // Shrink label to match the design
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            label="Last Name"
                                            fullWidth
                                            {...register('lastName', { required: 'Last name is required' })}
                                            error={!!errors.lastName}
                                            helperText={errors.lastName?.message}
                                            InputLabelProps={{ shrink: true }} // Shrink label
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            label="Email Address"
                                            fullWidth
                                            {...register('email', {
                                                required: 'Email is required',
                                                pattern: {
                                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                                    message: 'Invalid email address',
                                                },
                                            })}
                                            error={!!errors.email}
                                            helperText={errors.email?.message}
                                            InputLabelProps={{ shrink: true }}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            label="Phone Number"
                                            fullWidth
                                            {...register('phone', {
                                                required: 'Phone number is required',
                                                pattern: {
                                                    value: /^[0-9]{10}$/,
                                                    message: 'Enter a valid 10-digit phone number',
                                                },
                                            })}
                                            error={!!errors.phone}
                                            helperText={errors.phone?.message}
                                            InputLabelProps={{ shrink: true }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Autocomplete
                                            multiple
                                            options={['Andhra Pradesh',
                                                'Arunachal Pradesh',
                                                'Assam',
                                                'Bihar',
                                                'Chhattisgarh',
                                                'Goa',
                                                'Gujarat',
                                                'Haryana',
                                                'Himachal Pradesh',
                                                'Jharkhand',
                                                'Karnataka',
                                                'Kerala',
                                                'Madhya Pradesh',
                                                'Maharashtra',
                                                'Manipur',
                                                'Meghalaya',
                                                'Mizoram',
                                                'Nagaland',
                                                'Odisha',
                                                'Punjab',
                                                'Rajasthan',
                                                'Sikkim',
                                                'Tamil Nadu',
                                                'Telangana',
                                                'Tripura',
                                                'Uttar Pradesh',
                                                'Uttarakhand',
                                                'West Bengal',
                                                'Andaman and Nicobar Islands',
                                                'Chandigarh',
                                                'Dadra and Nagar Haveli and Daman and Diu',
                                                'Lakshadweep',
                                                'Delhi',
                                                'Puducherry',
                                                'Jammu and Kashmir',
                                                'Ladakh',]}
                                            onChange={(event, value) => {
                                                setValue('state', value);
                                            }}
                                            renderInput={(params) => (
                                                <TextField {...params} label="State" placeholder="Select states" InputLabelProps={{ shrink: true }} />
                                            )}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            label="City"
                                            fullWidth
                                            {...register('city')}
                                            InputLabelProps={{ shrink: true }}
                                        />
                                    </Grid>

                                    {/* Reference Dropdown */}
                                    <Grid item xs={12} sm={6}>
                                        <Autocomplete
                                            multiple
                                            options={['LinkedIn', 'Search Engine', 'Other']}
                                            onChange={(event, value) => {
                                                setReferenceValue(value);
                                                setValue('reference', value);
                                            }}
                                            renderInput={(params) => (
                                                <TextField {...params} label="Reference" placeholder="Select references" InputLabelProps={{ shrink: true }} />
                                            )}
                                        />
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <label htmlFor="upload-file">
                                            <input
                                                accept="image/*,.pdf"
                                                id="upload-file"
                                                type="file"
                                                style={{ display: 'none' }}
                                                {...register('file')}
                                            />
                                            <Button
                                                variant="outlined"
                                                component="span"
                                                startIcon={<UploadFileIcon />}
                                                fullWidth
                                            >
                                                Choose File
                                            </Button>
                                        </label>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            label="Address"
                                            fullWidth
                                            {...register('address', { required: 'Address is required' })}
                                            error={!!errors.address}
                                            helperText={errors.address?.message}
                                            InputLabelProps={{ shrink: true }} // Shrink label
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            fullWidth
                                            style={{
                                                backgroundColor: '#00B4D8', // Light blue as in the image
                                                color: '#fff',
                                                padding: '10px 20px',
                                                fontWeight: 'bold',
                                                fontSize: '16px',
                                                borderRadius: '30px', // Rounded button to match design
                                            }}
                                        >
                                            Submit Application
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default GloumJobDetails;


