const projects = [
    {
        heading:"Portfolio website - template",
        summary:"A customizable, responsive portfolio template designed for individuals to showcase their work professionally. It offers an elegant, user-friendly interface that can be easily personalized, with sections for introduction, skills, about me, projects, experience and contact information. Ideal for developers, designers, and creatives.",
        code:"https://github.com/MunbaBataa/portfolio",
        link:"https://munkhbattomaganbat.vercel.app",
        img:"Portfolio.png",
        tech: ["nextJS","TypeScript","Tailwind","Shadcn"]
    },
    {
        heading:"Amar express logistics system",
        summary:"Amar Logistics System бол Монгол Улсад хүргэлтийн компаниуд болон хэрэглэгчдийг холбох вэб, мобайл, GPS технологид суурилсан цогц embedded систем юм. Энэхүү платформ нь хүргэлтийн явцыг бодит цагийн байршлаар хянах боломж олгож, бүх төрлийн хүргэлтийн үйлчилгээг нэг дор төвлөрүүлэн, захиалга, хяналт, харьцуулалт, сонголтыг хялбаршуулдаг. Хүргэлтийн тээврийн хэрэгсэлтэй холбогдсон ухаалаг төхөөрөмжүүдээр дамжуулан өгөгдөл дамжуулж, үйл ажиллагааны үр ашгийг нэмэгдүүлдэг.",
        code:"https://github.com/MunbaBataa/MakeEngineeringEasy",
        link:"https://logistics.tataya.mn/",
        img:"MakeEasy.png",
        tech: ["nextJS","TypeScript","Tailwind","Shadcn","NodeJS","MongoDB","CSS","Go","Postgre SQL"]
    },
    {
        heading:"Hoolzuich - mobile app",
        summary:`"Хоолзүйч" апп нь Flutter технологид суурилсан ухаалаг хоолны зөвлөмжийн систем юм. Хоолны зураг таньж калорын хэмжээг тооцоолно. Ухаалаг цагтай холбогдож цусны даралт, глюкозын түвшинг хянадаг. AI-ийн тусламжтайгаар хувь хүний эрүүл мэндэд тохирсон хоолны дэглэмийг санал болгодог.`,
        code:"https://github.com/MunbaBataa/hoolzuich",
        link:"https://github.com/MunbaBataa/hoolzuich",
        img:"JWT-Auth.png",
        tech: ["Flutter","AWS"]
    },
    // {
    //     heading:"Music system",
    //     summary:"Developed an interactive music system with features for playing, pausing, and skipping tracks. Enhanced user experience through intuitive design and responsive controls. Utilized HTML, CSS, and JavaScript to create a visually appealing and functional audio interface.",
    //     code:"https://github.com/MunbaBataa//Music_sys",
    //     link:"https://MunbaBataa.github.io/Music_sys/",
    //     img:"music.png",
    //     tech: ["HTML" ,"CSS", "JavaScript", "jQuery"]
    // },
    // {
    //     heading:"ToDo list",
    //     summary:"Developed a to-do list website with features for creating and managing tasks, including night mode and light mode options. Enhanced user experience through intuitive design and responsive functionality.",
    //     code:"https://github.com/MunbaBataa/TodoWithBackend",
    //     link:"https://todo-with-features.vercel.app/",
    //     img:"Todo.png",
    //     tech: ["ReactJS","NodeJS", "ExpressJS", "JavaScript" , "SASS"]
    // },
    // {
    //     heading:"Tik-Tak-Toe game",
    //     summary:"Tic Tac Toe (also known as “Xs and Os”) is a classic two-player board game played on a 3x3 grid. The objective is to form a line of three matching symbols (either X or O) horizontally, vertically, or diagonally.",
    //     code:"https://github.com/MunbaBataa/TikTacToe",
    //     link:"https://shiveshnandan.github.io/TikTacToe/",
    //     img:"Tiktactoe.png",
    //     tech: ["HTML" ,"CSS", "JavaScript", "jQuery"]
    // },
    // {
    //     heading:"Memory game (tile pattern)",
    //     summary:"Developed an interactive memory game featuring clickable tiles that produce unique sounds. Enhanced user engagement through intuitive design and responsive gameplay. Utilized HTML, CSS, and JavaScript to create a visually appealing and functional experience.",
    //     code:"https://github.com/ShiveshNandan/memory_game",
    //     link:"https://shiveshnandan.github.io/memory_game/",
    //     img:"memory game.png",
    //     tech: ["HTML" ,"CSS", "JavaScript", "jQuery"]
    // },
    // {
    //     heading:"Make engineering easy Admin Portal",
    //     summary:"An admin portal as part of the educational website infrastructure, facilitating course management functionalities such as adding, editing, deleting, and modifying courses.",
    //     code:"https://github.com/ShiveshNandan/mainProject-admin",
    //     link:"https://main-project-admin.vercel.app",
    //     img:"music.png",
    //     tech: ["hello"]
    // },
    // {
    //     heading:"Car website",
    //     summary:"An interesting website where you can search for the different cars and their features.",
    //     code:"https://github.com/MunbaBataa/carWebsite",
    //     link:"https://carshow-room.vercel.app/",
    //     img:"Car.png",
    //     tech: ["nextJS","Tailwind","TypeScript","NodeJS"]
    // },
    // {
    //     heading:"Memory game flip card",
    //     summary:"Developed an interactive memory game with flip card mechanics, where players match pairs of cards. Enhanced user engagement through intuitive design and responsive gameplay. Utilized HTML, CSS, and JavaScript to create a visually appealing and functional game.",
    //     code:"https://github.com/MunbaBataa/memory-game-flip-card",
    //     link:"https://MunbaBataa.github.io/memory-game-flip-card/",
    //     img:"FlipGame.png",
    //     tech: ["HTML" ,"CSS", "JavaScript", "jQuery","Tailwind"]
    // },
    // {
    //     heading:"Personal website",
    //     summary:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem atque accusamus dolorem! Omnis, vitae nemo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, cum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, architecto.",
    //     code:"https://github.com/MunbaBataa//personal_website",
    //     link:"https://MunbaBataa/.github.io/personal_website/",
    //     img:"personal.png",
    //     tech: ["ReactJS","CSS", "JavaScript","Bootstrap"]
    // },
    // {
    //     heading:"Link Tree",
    //     summary:"Developed a personalized Linktree, streamlining access to various social media profiles and important links. Enhanced user navigation with intuitive design and responsive layout. Utilized HTML, CSS, and JavaScript to create a visually appealing and functional interface.",
    //     code:"https://github.com/MunbaBataa//LinkTree",
    //     link:"https://MunbaBataa/.github.io/LinkTree/",
    //     img:"link tree.png",
    //     tech: ["HTML" ,"CSS", "JavaScript", "jQuery"]
    // },
    // {
    //     heading:"Analog clock",
    //     summary:"Developed a functional analog watch application displaying real-time updates. Enhanced user experience with intuitive design and smooth, responsive movements. Utilized HTML, CSS, and JavaScript to create a visually appealing and accurate timekeeping tool.",
    //     code:"https://github.com/MunbaBataa/clock",
    //     link:"https://MunbaBataa.github.io/clock/",
    //     img:"clock.png",
    //     tech: ["HTML" ,"CSS", "JavaScript", "jQuery"]
    // },
    // {
    //     heading:"Dice game",
    //     summary:"Developed an interactive dice game where players refresh the page to roll two dice, with the higher number determining the winner. Enhanced user experience through intuitive design and responsive gameplay. Utilized HTML, CSS, and JavaScript to create a visually appealing and functional game.",
    //     code:"https://github.com/MunbaBataa/DiceGame",
    //     link:"https://MunbaBataa.github.io/DiceGame/",
    //     img:"dice.png",
    //     tech: ["HTML" ,"CSS", "JavaScript", "jQuery"]
    // },
    // {
    //     heading:"Hotstar clone",
    //     summary:"Developed a Hotstar clone, replicating the streaming platform’s user interface. Utilized HTML, CSS, and JavaScript to create a responsive website. Demonstrated web development skills and attention to detail.",
    //     code:"https://github.com/MunbaBataa/Hotstar-clone",
    //     link:"https://MunbaBataa.github.io/Hotstar-clone/",
    //     img:"Hotstar.png",
    //     tech: ["HTML" ,"CSS", "JavaScript", "jQuery"]
    // },
    // {
    //     heading:"Restaurant website",
    //     summary:"Developed a dynamic restaurant website with a responsive design, enhancing online ordering and reservation systems. Improved customer engagement and satisfaction through modern UI/UX principles and seamless navigation.",
    //     code:"https://github.com/MunbaBataa/resturant_website",
    //     link:"https://MunbaBataa.github.io/resturant_website/",
    //     img:"Rest.png",
    //     tech: ["HTML" ,"CSS", "JavaScript", "jQuery"]
    // },
    
]

export default projects;