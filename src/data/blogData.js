// =======================================================================
// CONTENT DATA
// =======================================================================
export const API_CONFIG = {
    MY_BLOOD_BANK_NAME: 'Uttarakhand Blood Center',
};

export const contentData = {
    upcomingEvents: [
        {
            id: 'e1',
            title: "Mega Blood Donation Drive: Dehradun University",
            date: "Saturday, 25th Nov 2024",
            time: "10:00 AM - 4:00 PM",
            location: "University Campus Auditorium, Dehradun",
            image: "https://placehold.co/800x400/8A0330/FFFFFF?text=Upcoming+Camp+Banner",
            details: "Join our biggest event of the year! We are targeting 500+ units of blood. All donors receive a certificate and a complimentary health checkup."
        },
        {
            id: 'e2',
            title: "Himalayan Blood Camp: Uttarkashi",
            date: "Sunday, 15th Dec 2024",
            time: "9:00 AM - 3:00 PM",
            location: "District Hospital, Uttarkashi",
            image: "https://placehold.co/800x400/A0364D/FFFFFF?text=Mountain+Camp+Banner",
            details: "A crucial camp to ensure blood availability in high-altitude and remote areas."
        },
    ],
    featuredPosts: [
        {
            id: 'f1',
            type: 'video',
            title: "Dehradun University Camp - Highlights 2024 (Vlog)",
            date: "25th Nov 2024",
            location: "Dehradun",
            image: "https://placehold.co/1200x500/A0364D/FFFFFF?text=Featured+Video+Thumbnail",
            url: "https://youtube.com/watch?v=dehradun_camp",
            description: "Watch the energy and enthusiasm of our Mega Blood Donation Drive! This vlog covers the donor experience, interviews, and the immense impact created for the regional blood stock. A must-watch for all donors."
        },
        {
            id: 'f2',
            type: 'image_post',
            title: "Our New Automated Testing Lab Inauguration",
            date: "10th Dec 2024",
            location: "Rishikesh Main Center",
            image: "https://placehold.co/1200x500/8A0330/FFFFFF?text=Lab+Inauguration+Photo+Post",
            url: "#lab-inauguration",
            description: "We are proud to announce the launch of our state-of-the-art automated testing laboratory. This major upgrade ensures faster and safer blood screening, reinforcing our commitment to quality assurance."
        },
    ],
    // src/data/vlogData.js
     pastPosts: [
        {
            id: "p1",
            type: "image_gallery",
            title: "Rishikesh Monsoon Camp Photos",
            date: "August 2024",
            image: "https://placehold.co/800x400/e9a0a0/333333?text=Rishikesh+Camp",
            summary: "Collected 350+ units with great enthusiasm from local volunteers.",
            content: `
      <p>During the <strong>Rishikesh Monsoon Blood Donation Camp</strong>, we witnessed overwhelming support from local volunteers, students, and adventure groups. The event lasted 3 days with live music, free medical checkups, and refreshments.</p>
      <p>In total, <b>356 blood units</b> were collected and distributed to nearby hospitals. The camp was jointly organized by Uttarakhand Blood Center and local NGOs.</p>
    `,
            gallery: [
                "https://placehold.co/400x300/e57373/fff?text=Camp+Day+1",
                "https://placehold.co/400x300/f48fb1/fff?text=Camp+Day+2",
                "https://placehold.co/400x300/ef9a9a/fff?text=Donors",
                "https://placehold.co/400x300/e91e63/fff?text=Volunteers",
            ],
        },
        {
            id: "p2",
            type: "text_update",
            title: "Urgent Need for O-Negative Blood",
            date: "July 2024",
            image: "https://placehold.co/800x400/f081a1/333333?text=Urgent+Need",
            summary: "Critically low stock of O-Negative blood group in storage.",
            content: `
      <p>We are currently facing a shortage of <strong>O-Negative blood</strong> across Dehradun, Rishikesh, and nearby regions. We urge healthy donors to come forward immediately.</p>
      <ul>
        <li>Location: Dehradun Blood Bank</li>
        <li>Contact: +91 9876543210</li>
        <li>Timing: 9:00 AM - 5:00 PM daily</li>
      </ul>
      <p>Please share this message to save lives.</p>
    `,
        },
        {
            id: "p3",
            type: "video",
            title: "Safe Donation Practices Explained (Short)",
            date: "June 2024",
            image: "https://placehold.co/800x400/d46884/fff?text=Safe+Donation+Practices",
            summary: "Educational short video for first-time donors.",
            videoUrl: "https://www.youtube.com/embed/safe_donation_short",
            content: `
      <p>This short educational video explains <strong>how to prepare for blood donation</strong>, what to eat before donating, and post-donation care.</p>
      <p>We thank Dr. Arjun Mehta for his guidance and support.</p>
    `,
        },
        {
            id: "p4",
            type: "image_post",
            title: "Donor Spotlight: Meet Rajesh ji",
            date: "May 2024",
            image: "https://placehold.co/800x400/a0364d/fff?text=Donor+Spotlight",
            summary: "Meet our inspiring donor, Rajesh ji.",
            content: `
      <p>Rajesh ji from Chamoli has donated blood <strong>25 times</strong> in the past 10 years. His story inspires many in his village to volunteer for donation camps.</p>
      <p>He believes, “One drop of blood can save many lives.”</p>
    `,
        },
        {
            id: "p5",
            type: "image_gallery",
            title: "New Volunteer Orientation Day",
            date: "April 2024",
            image: "https://placehold.co/800x400/6f0022/FFFFFF?text=Volunteer+Photos",
            summary: "Photos from our recent orientation session for new volunteers across the region.",
            gallery: [
                "https://placehold.co/400x300/d32f2f/fff?text=Orientation+Group",
                "https://placehold.co/400x300/f06292/fff?text=Training+Session",
                "https://placehold.co/400x300/ef9a9a/fff?text=Volunteers",
                "https://placehold.co/400x300/f8bbd0/333?text=Certificates",
            ],
            content: `
      <p>The <strong>Volunteer Orientation Day</strong> was a success! Over 100 new volunteers joined our blood awareness and donation drive program. The session included training, motivational talks, and interactive games.</p>
    `,
        },
        {
            id: "p6",
            type: "text_update",
            title: "Blood Storage Unit Upgrade Complete",
            date: "March 2024",
            image: "https://placehold.co/800x400/A0364D/FFFFFF?text=Equipment+Update",
            summary: "We have successfully upgraded our blood storage refrigeration unit for better preservation.",
            content: `
      <p>We’re proud to announce that our <strong>storage facility upgrade</strong> is complete. This new refrigeration unit ensures longer shelf life for blood and plasma, improving availability during emergencies.</p>
    `,
        },
        {
            id: "p7",
            type: "video",
            title: "Why Donate Blood? (Expert Talk)",
            date: "February 2024",
            image: "https://placehold.co/800x400/e9a0a0/333333?text=Expert+Video+Talk",
            summary: "A detailed discussion with Dr. Priya Sharma on the importance and process of regular blood donation.",
            videoUrl: "https://www.youtube.com/embed/expert_talk",
            content: `
      <p>In this expert talk, Dr. Priya Sharma explains <strong>why blood donation should become a regular habit</strong>. She shares facts about how each donation can save up to three lives and debunks common myths.</p>
    `,
        },
    ],

};
