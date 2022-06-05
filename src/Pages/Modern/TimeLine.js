import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

export default function OppositeContentTimeline() {
    return (
            <Timeline sx={{marginLeft:'-50%'}}>
                <TimelineItem>
                    <TimelineOppositeContent color="text.secondary">
                        <span style={{color: '#222'}} >09:30</span>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot variant="outlined" color='third' />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Payment received from John Doe of $385.90</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent color="text.secondary">
                        <span style={{color: '#222'}} >10:00</span>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot variant="outlined" color='fourth' />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Project Meeting</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent color="text.secondary">
                        <span style={{color: '#222'}} >12:00</span>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot variant="outlined" color='fifth' />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>New sale recorded #ML-3467</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent color="text.secondary">
                        <span style={{color: '#222'}} >9:00</span>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot variant="outlined" color="sixth" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Payment was made of $64.95 to Michael Anderson</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent color="text.secondary">
                        <span style={{color: '#222'}} >9:30</span>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot variant="outlined" color="seventh" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>New payment receipt created for Alphanso Golvo</TimelineContent>
                </TimelineItem>
            </Timeline>
    );
}
