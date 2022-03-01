export default {
    baseName: "FlexLight",
    colors: {
        lightTextColor: "#ffdda0",
        darkTextColor: "#6D9886",
    },
    overrides: {
        MainHeader: {
            Container: {
                color: "#76421a",
                background: "#96CEB4",          
            },
            Button: {
                color: "#D9534F",
                background: "#96CEB4", 
            }
        },
        SideNav: {
            Container: {
                background: "#FFEEAD",
            },
            Button: {
                background: "#FFEEAD",
                color: "#D9534F"
            },
            Icon: {
                color: "#D9534F"
            }
        },

        TaskCanvasHeader: {
            WrapupTaskButton: {
                background: "#76421a",
                color: "#ffffff",
            },
            EndTaskButton: {
                background: "#ffdda0",
                color: "#000000",
            }
        },
    }
    
}