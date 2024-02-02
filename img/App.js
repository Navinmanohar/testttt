
  let parent=React.createElement('div',{id:'parent'},
            [ 
                React.createElement('div',{id:'child'},
                [
                    React.createElement('div',{id:'head'},'this is head'),
                    React.createElement('div',{id:'head'},'i am other tag')
                ]) ,               
                React.createElement('div',{id:'child'},
                [
                    React.createElement('div',{id:'head'},'this is head'),
                    React.createElement('div',{id:'head'},'i am other tag')
                ])                
            ])
  let parent2=React.createElement('div',{id:'parent'},
            [    
                React.createElement('div',{id:'child'},
                [
                    React.createElement('div',{id:'head'},'this is head'),
                    React.createElement('div',{id:'head'},'i am other tag')
                ]) ,               
                React.createElement('div',{id:'child'},
                [
                    React.createElement('div',{id:'head'},'this is head'),
                    React.createElement('div',{id:'head'},'i am other tag')
                ])                
            ])


        let root=ReactDOM.createRoot(document.getElementById('root'))
        // console.log(root)
        root.render([parent,parent2])