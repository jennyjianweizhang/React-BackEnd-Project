const emailList = [
    {
      id: 1,
      name: "Tommy Sicilia",
      email: "tommy@example.com",
      message: "How to Succeed with Your Shopify Store",
      detailedDate: "Sat Mar 30 2024 08:36 PM",
      content: `Hey,
  
  There was a request to change your password!
  
  If you did not make this request, just ignore this email. Otherwise, please click the button below to change your password:
  
  Regards,
  
  Tommy Sicilia`,
      labels: ["personal", "important"],
      time: "11:46 PM",
      avatar: "http://127.0.0.1:8000/avatars/avatar-1.png",
      status: ["inbox", "starred"],
      read: false,
    },
    {
      id: 2,
      name: "Tressa Gass",
      email: "tressa@example.com",
      message: "Please find attached the latest Company Report",
      detailedDate: "Sat Mar 30 2024 09:15 PM",
      content: `Dear Team,
  
  Please find attached the latest report on our company's performance in the last quarter. Feel free to reach out if you have any questions.
  
  Best,
  Tressa Gass`,
      labels: ["company"],
      time: "11:55 PM",
      avatar: "http://127.0.0.1:8000/avatars/avatar-2.png",
      status: ["inbox"],
      read: true,
    },
    {
      id: 3,
      name: "Louetta Esses",
      email: "louetta@example.com",
      message: "Update Can Change Your Personal Life",
      detailedDate: "Sat Mar 30 2024 10:04 PM",
      content: `Hello,
  
  We're excited to share that a new update can significantly change your personal life for the better!
  
  Check out the details on our website.
  
  Best,
  Louetta Esses`,
      labels: ["important"],
      time: "01:04 AM",
      avatar: "http://127.0.0.1:8000/avatars/avatar-3.png",
      status: ["inbox"],
      read: false,
    },
    {
      id: 4,
      name: "Waldemar Mannering",
      email: "waldemar@example.com",
      message: "Refer friends. Get rewards.",
      detailedDate: "Sat Mar 30 2024 10:32 PM",
      content: `Hi,
  
  Refer your friends to our service and get rewards! It's a win-win for everyone.
  
  Cheers,
  Waldemar`,
      labels: ["personal"],
      time: "03:02 AM",
      avatar: "http://127.0.0.1:8000/avatars/avatar-4.png",
      status: ["inbox"],
      read: true,
    },
    {
      id: 5,
      name: "Eb Begg",
      email: "eb@example.com",
      message: "App Update",
      detailedDate: "Sat Mar 30 2024 11:12 PM",
      content: `Dear User,
  
  Our app has a new update with exciting features that we believe you'll love.
  
  Check it out in the app store.
  
  Regards,
  Eb Begg`,
      labels: ["important"],
      time: "03:12 PM",
      avatar: "http://127.0.0.1:8000/avatars/avatar-5.png",
      status: ["inbox"],
      read: false,
    },
    {
      id: 6,
      name: "Modestine Spat",
      email: "modestine@example.com",
      message: "Password Reset",
      detailedDate: "Sun Mar 31 2024 04:25 AM",
      content: `Hi,
  
  You requested to reset your password. Click the link below to proceed.
  
  If you didn't request this, please ignore this email.
  
  Best,
  Modestine Spat`,
      labels: ["important", "private"],
      time: "04:25 AM",
      avatar: "http://127.0.0.1:8000/avatars/avatar-6.png",
      status: ["inbox"],
      read: false,
    },
    {
      id: 7,
      name: "Ardis Balderson",
      email: "ardis@example.com",
      message: "Bank transfer initiated.",
      detailedDate: "Sun Mar 31 2024 02:09 PM",
      content: `Dear Customer,
  
  Your bank transfer has been initiated as requested. It will be processed within 2-3 business days.
  
  Regards,
  Ardis Balderson`,
      labels: ["important"],
      time: "02:09 PM",
      avatar: "http://127.0.0.1:8000/avatars/avatar-7.png",
      status: ["inbox"],
      read: true,
    },
    {
      id: 8,
      name: "Dalila Ouldcott",
      email: "dalila@example.com",
      message: "Order Feedback",
      detailedDate: "Sun Mar 31 2024 08:39 PM",
      content: `Hello,
  
  We hope you're enjoying your purchase! We'd love to hear your feedback.
  
  Best,
  Dalila Ouldcott`,
      labels: ["company"],
      time: "08:39 PM",
      avatar: "http://127.0.0.1:8000/avatars/avatar-8.png",
      status: ["inbox"],
      read: false,
    },
    {
      id: 9,
      name: "Lockwood Kubicek",
      email: "lockwood@example.com",
      message: "Finally Start Running",
      detailedDate: "Sun Mar 31 2024 08:45 PM",
      content: `Hey there,
  
  It's time to lace up your running shoes and hit the pavement! Join us for a run.
  
  Cheers,
  Lockwood`,
      labels: ["personal"],
      time: "08:45 PM",
      avatar: "http://127.0.0.1:8000/avatars/avatar-9.png",
      status: ["inbox"],
      read: false,
    },
    {
      id: 10,
      name: "Milena Osgarby",
      email: "milena@example.com",
      message: "Eco Food",
      detailedDate: "Sun Mar 31 2024 09:15 PM",
      content: `Dear Eco Warriors,
  
  Check out our new line of eco-friendly food products. Good for you, good for the planet!
  
  Stay green,
  Milena Osgarby`,
      labels: ["company", "important"],
      time: "09:15 PM",
      avatar: "http://127.0.0.1:8000/avatars/avatar-10.png",
      status: ["inbox"],
      read: false,
    },
    {
      id: 11,
      name: "Gabriel Abramow",
      email: "gabriel@example.com",
      message: "Forgot your password?",
      detailedDate: "Sun Mar 31 2024 10:00 PM",
      content: `Hello,
  
  It seems you've requested a password reset. Click here to proceed. If you didn't request this, you can safely ignore this message.
  
  Best,
  Gabriel Abramow`,
      labels: ["private"],
      time: "10:00 PM",
      avatar: "http://127.0.0.1:8000/avatars/avatar-11.png",
      status: ["inbox"],
      read: false,
    },
    {
      id: 12,
      name: "Pheoebe Buffay",
      email: "pheoebe@example.com",
      message: "Personal Insurance",
      detailedDate: "Sun Mar 31 2024 10:30 PM",
      content: `Hey!
  
  Did you know that our personal insurance plans are now more affordable? Protect what's precious.
  
  Cheers,
  Pheoebe Buffay`,
      labels: ["important", "personal"],
      time: "10:30 PM",
      avatar: "http://127.0.0.1:8000/avatars/avatar-12.png",
      status: ["inbox"],
      read: true,
    },
    {
      id: 13,
      name: "Temple Olrenshaw",
      email: "temple@example.com",
      message: "April Fools Day Movies",
      detailedDate: "Sun Mar 31 2024 11:15 PM",
      content: `Hi,
  
  Get ready for April Fools Day with our special selection of comedy movies!
  
  Best,
  Temple Olrenshaw`,
      labels: ["personal"],
      time: "11:15 PM",
      avatar: "http://127.0.0.1:8000/avatars/avatar-13.png",
      status: ["inbox"],
      read: false,
    },
    // trash
    {
      id: 14,
      name: "Kathryn Burns",
      email: "kennedyalexis@yahoo.com",
      message: "Artist political yard data short.",
      detailedDate: "Wed Jun 14 2023 01:52 AM",
      content: `Hi,
  
  Fly cover economy away. Factor daughter now effect they investment.
  Example particular turn. Career glass begin.
  Hair affect have book those. Window between structure method.
  
  Best,
  Jesse`,
      labels: ["important"],
      time: "08:30:55",
      avatar: "http://127.0.0.1:8000/avatars/avatar-14.png",
      status: ["trash"],
      read: false,
    },
    {
      id: 15,
      name: "Riley Warren",
      email: "brookeprice@yahoo.com",
      message: "Newspaper friend difference help clearly interview camera.",
      detailedDate: "Tue May 09 2023 09:30 PM",
      content: `Hi,
  
  Deep late again team. Explain player four sure must old. Similar story adult successful.
  Cover bit size them music charge start. Environment bar past thank ago after environment why.
  
  Best,
  Ashley`,
      labels: ["personal"],
      time: "01:02:13",
      avatar: "http://127.0.0.1:8000/avatars/avatar-15.png",
      status: ["trash"],
      read: false,
    },
    {
      id: 16,
      name: "Allison Doyle",
      email: "colleenvance@yahoo.com",
      message: "Nearly after word idea sure interview.",
      detailedDate: "Sat Jun 17 2023 03:01 PM",
      content: `Hi,
  
  Economy short offer remember about side writer. Center person often nice. Bar successful increase move agreement.
  
  Best,
  Rebecca`,
      labels: ["personal"],
      time: "04:55:23",
      avatar: "http://127.0.0.1:8000/avatars/avatar-16.png",
      status: ["trash"],
      read: true,
    },
    // spam
    {
      id: 17,
      name: "Ray Hamilton",
      email: "sharon84@barker.com",
      message: "Along night age line.",
      detailedDate: "Thu Jan 11 2024 11:35 AM",
      content: `Hi,
  
  Top course page individual her term. Foot decision little manage center education do.
  Morning of fall last me certainly rule accept. Message go staff door education team trip.
  
  Best,
  Carrie`,
      labels: ["important"],
      time: "02:17:35",
      avatar: "http://127.0.0.1:8000/avatars/avatar-17.png",
      status: ["spam"],
      read: false,
    },
    {
      id: 18,
      name: "Ashley Brown",
      email: "briankim@hall.biz",
      message: "Story from the edges: Travel blogging",
      detailedDate: "Mon Apr 10 2023 10:12 AM",
      content: `Hi,
  
  Discover the world through the eyes of our travel bloggers. This week, we explore the unseen corners of the globe.
  
  Best,
  Ashley`,
      labels: ["travel"],
      time: "10:12 AM",
      avatar: "http://127.0.0.1:8000/avatars/avatar-18.png",
      status: ["spam"],
      read: true,
    },
    {
      id: 19,
      name: "Scott Anderson",
      email: "alyssawilliams@hotmail.com",
      message: "Your subscription has been updated",
      detailedDate: "Fri Jul 21 2023 08:45 PM",
      content: `Hi,
  
  Thank you for updating your subscription. Your new plan offers great benefits that we hope you enjoy.
  
  Best,
  Scott`,
      labels: ["important"],
      time: "08:45 PM",
      avatar: "http://127.0.0.1:8000/avatars/avatar-19.png",
      status: ["spam"],
      read: false,
    },
    // starred
    {
      id: 20,
      name: "Daniel Smith",
      email: "rachel85@gmail.com",
      message: "Alert: Unusual activity detected",
      detailedDate: "Sat Aug 12 2023 05:30 PM",
      content: `Hi,
  
  We've detected some unusual activity on your account. If this wasn't you, please change your password immediately.
  
  Best,
  Daniel`,
      labels: ["important", "private"],
      time: "05:30 PM",
      avatar: "http://127.0.0.1:8000/avatars/avatar-20.png",
      status: ["starred"],
      read: true,
    },
    {
      id: 21,
      name: "James Carter",
      email: "gsmith@gmail.com",
      message: "Invitation: Join our Webinar",
      detailedDate: "Wed Sep 13 2023 02:25 PM",
      content: `Hi,
  
  You're invited to join our upcoming webinar on the future of technology. Don't miss out on this informative session.
  
  Best,
  James`,
      labels: ["private", "important"],
      time: "02:25 PM",
      avatar: "http://127.0.0.1:8000/avatars/avatar-21.png",
      status: ["starred"],
      read: true,
    },
    {
      id: 22,
      name: "John Doe",
      email: "mhernandez@yahoo.com",
      message: "Thank you for your donation",
      detailedDate: "Thu Oct 05 2023 01:45 AM",
      content: `Hi,
  
  Your recent donation has made a significant impact. Thank you for your support.
  
  Best,
  John`,
      labels: ["personal"],
      time: "01:45 AM",
      avatar: "http://127.0.0.1:8000/avatars/avatar-22.png",
      status: ["starred"],
      read: false,
    },
    {
      id: 23,
      name: "Sarah Miller",
      email: "davidmartinez@gmail.com",
      message: "Important: Account Verification Required",
      detailedDate: "Sun Nov 19 2023 04:18 PM",
      content: `Hi,
  
  For your security, we require account verification. Please follow the link to verify your account.
  
  Best,
  Sarah`,
      labels: ["important"],
      time: "04:18 PM",
      avatar: "http://127.0.0.1:8000/avatars/avatar-23.png",
      status: ["starred"],
      read: true,
    },
    // draft
    {
      id: 24,
      name: "Lisa Harris",
      email: "melissawilliams@yahoo.com",
      message: "Welcome to the team!",
      detailedDate: "Mon Dec 04 2023 09:30 AM",
      content: `Hi,
  
  Welcome aboard! We're thrilled to have you on our team. Here's everything you need to get started.
  
  Best,
  Lisa`,
      labels: ["company"],
      time: "09:30 AM",
      avatar: "http://127.0.0.1:8000/avatars/avatar-24.png",
      status: ["draft"],
      read: false,
    },
    {
      id: 25,
      name: "Michael Williams",
      email: "michaelsanchez@yahoo.com",
      message: "Your order has been shipped",
      detailedDate: "Fri Dec 15 2023 07:50 PM",
      content: `Hi,
  
  Your recent order has been shipped, and you should receive it shortly. Here's the tracking number for your convenience.
  
  Best,
  Michael`,
      labels: ["company"],
      time: "07:50 PM",
      avatar: "http://127.0.0.1:8000/avatars/avatar-25.png",
      status: ["draft"],
      read: true,
    },
  
    // sent
    {
      id: 26,
      name: "Donald Davis",
      email: "bradleycox@moore.com",
      message: "Draw both Democrat name for officer little.",
      detailedDate: "Fri Mar 15 2024 02:02 AM",
      content: `Hi,
  
  Begin mission big what deep.
  Town man subject. Agency life door end organization character pay. Walk evening what clear officer.
  
  Best,
  Dean`,
      labels: ["personal"],
      time: "00:03:43",
      avatar: "http://127.0.0.1:8000/avatars/avatar-29.png",
      status: ["sent"],
      read: true,
    },
    {
      id: 27,
      name: "Robert Henderson",
      email: "lynn59@davis-love.org",
      message: "Wide about positive leader different account herself.",
      detailedDate: "Wed Nov 22 2023 12:17 AM",
      content: `Hi,
  
  Radio at night strategy. Season quickly energy foreign box.
  Involve trip relate goal smile program. It number rate toward product according bag room. Herself task agent attention news issue.
  
  Best,
  Michael`,
      labels: ["personal"],
      time: "19:28:53",
      avatar: "http://127.0.0.1:8000/avatars/avatar-30.png",
      status: ["sent"],
      read: true,
    },
    {
      id: 28,
      name: "David Crawford",
      email: "kevin65@burke.biz",
      message: "Own yes who across smile four.",
      detailedDate: "Tue Feb 27 2024 12:58 PM",
      content: `Hi,
  
  Offer surface should spring American discuss. Act international significant stuff group.
  
  Best,
  Julia`,
      labels: ["personal"],
      time: "08:03:40",
      avatar: "http://127.0.0.1:8000/avatars/avatar-31.png",
      status: ["sent"],
      read: false,
    },
  ];

  export default emailList;