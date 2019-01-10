(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,n,t){"use strict";t.r(n);var a=t(9),r=t(0),c=t.n(r),i=t(49),o=t.n(i),u=t(5),s=t(47),l=t(58),m=t(3),d=t(70),f=t(71),g=t(63),p=t(111),h=t(114),v=t(110),b=t(109),E="/",y=t(64),O=t.n(y)()(),j=function(e){localStorage.setItem("token",""),e.resetStore(),O.push("/signin")},C=function(){return c.a.createElement(u.ApolloConsumer,null,function(e){return c.a.createElement("button",{type:"button",onClick:function(){return j(e)}},"Sign Out")})},k=function(e){var n=e.session;return c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(b.a,{to:E},"Landing")),c.a.createElement("li",null,c.a.createElement(b.a,{to:"/deck"},"Flashcards")),c.a.createElement("li",null,c.a.createElement(b.a,{to:"/account"},"Account (",n.me.username,")")),n&&n.me&&"ADMIN"===n.me.role&&c.a.createElement("li",null,c.a.createElement(b.a,{to:"/admin"},"Admin")),c.a.createElement("li",null,c.a.createElement(C,null)))},x=function(){return c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(b.a,{to:"/signin"},"Sign In")),c.a.createElement("li",null,c.a.createElement(b.a,{to:E},"Landing")))},w=function(e){var n=e.session;return c.a.createElement("div",null,n&&n.me?c.a.createElement(k,{session:n}):c.a.createElement(x,null))},S=t(6),M=t(7),A=t.n(M);function I(){var e=Object(S.a)(["\n  {\n    me {\n      id\n      username\n      email\n      role\n    }\n  }\n"]);return I=function(){return e},e}var $=A()(I()),D=function(e){return function(n){return c.a.createElement(u.Query,{query:$},function(t){var a=t.data,r=t.refetch;return c.a.createElement(e,Object.assign({},n,{session:a,refetch:r}))})}},q=t(19),Q=t.n(q),T=t(23),N=t(21),H=t(11),_=t(12),P=t(14),F=t(13),U=t(15),L=function(e){var n=e.error;return c.a.createElement("div",null,c.a.createElement("small",null,n.message))};function Y(){var e=Object(S.a)(["\n  mutation($text: String!) {\n    createMessage(text: $text) {\n      id\n      text\n      createdAt\n      user {\n        id\n        username\n      }\n    }\n  }\n"]);return Y=function(){return e},e}var R=A()(Y()),G=function(e){function n(){var e,t;Object(H.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=Object(P.a)(this,(e=Object(F.a)(n)).call.apply(e,[this].concat(r)))).state={text:""},t.onChange=function(e){var n=e.target,a=n.name,r=n.value;t.setState(Object(N.a)({},a,r))},t.onSubmit=function(){var e=Object(T.a)(Q.a.mark(function e(n,a){return Q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,a();case 4:t.setState({text:""}),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(1);case 9:case"end":return e.stop()}},e,this,[[1,7]])}));return function(n,t){return e.apply(this,arguments)}}(),t}return Object(U.a)(n,e),Object(_.a)(n,[{key:"render",value:function(){var e=this,n=this.state.text;return c.a.createElement(u.Mutation,{mutation:R,variables:{text:n}},function(t,a){a.data,a.loading;var r=a.error;return c.a.createElement("form",{onSubmit:function(n){return e.onSubmit(n,t)}},c.a.createElement("textarea",{name:"text",value:n,onChange:e.onChange,type:"text",placeholder:"Your message ..."}),c.a.createElement("button",{type:"submit"},"Send"),r&&c.a.createElement(L,{error:r}))})}}]),n}(r.Component),J=t(24);function B(){var e=Object(S.a)(["\n  mutation($id: ID!) {\n    deleteMessage(id: $id)\n  }\n"]);return B=function(){return e},e}function z(){var e=Object(S.a)(['\n  query {\n    messages(order: "DESC") @connection(key: "MessagesConnection") {\n      edges {\n        id\n        text\n        createdAt\n        user {\n          id\n          username\n        }\n      }\n      pageInfo {\n        hasNextPage\n      }\n    }\n  }\n']);return z=function(){return e},e}var K=A()(z()),V=A()(B()),W=function(e){var n=e.message;return c.a.createElement(u.Mutation,{mutation:V,variables:{id:n.id},update:function(e){var t=e.readQuery({query:K});e.writeQuery({query:K,data:Object(a.a)({},t,{messages:Object(a.a)({},t.messages,{edges:t.messages.edges.filter(function(e){return e.id!==n.id}),pageInfo:t.messages.pageInfo})})})}},function(e,n){return n.data,n.loading,n.error,c.a.createElement("button",{type:"button",onClick:e},"Delete")})},X=function(){return c.a.createElement("div",null,"Loading...")};function Z(){var e=Object(S.a)(['\n  query($cursor: String, $limit: Int!) {\n    messages(cursor: $cursor, limit: $limit)\n      @connection(key: "MessagesConnection") {\n      edges {\n        id\n        text\n        createdAt\n        user {\n          id\n          username\n        }\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n    }\n  }\n']);return Z=function(){return e},e}function ee(){var e=Object(S.a)(["\n  subscription {\n    messageCreated {\n      message {\n        id\n        text\n        createdAt\n        user {\n          id\n          username\n        }\n      }\n    }\n  }\n"]);return ee=function(){return e},e}var ne=A()(ee()),te=A()(Z()),ae=function(e){var n=e.limit,t=e.pageInfo,r=e.fetchMore,i=e.children;return c.a.createElement("button",{type:"button",onClick:function(){return r({variables:{cursor:t.endCursor,limit:n},updateQuery:function(e,n){var t=n.fetchMoreResult;return t?{messages:Object(a.a)({},t.messages,{edges:[].concat(Object(J.a)(e.messages.edges),Object(J.a)(t.messages.edges))})}:e}})}},i)},re=function(e){function n(){var e,t;Object(H.a)(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(t=Object(P.a)(this,(e=Object(F.a)(n)).call.apply(e,[this].concat(c)))).subscribeToMoreMessage=function(){t.props.subscribeToMore({document:ne,updateQuery:function(e,n){var t=n.subscriptionData;if(!t.data)return e;var r=t.data.messageCreated;return Object(a.a)({},e,{messages:Object(a.a)({},e.messages,{edges:[r.message].concat(Object(J.a)(e.messages.edges))})})}})},t}return Object(U.a)(n,e),Object(_.a)(n,[{key:"componentDidMount",value:function(){this.subscribeToMoreMessage()}},{key:"render",value:function(){var e=this.props,n=e.messages,t=e.me;return n.map(function(e){return c.a.createElement(ce,{key:e.id,message:e,me:t})})}}]),n}(r.Component),ce=function(e){var n=e.message,t=e.me;return c.a.createElement("div",null,c.a.createElement("h3",null,n.user.username),c.a.createElement("small",null,n.createdAt),c.a.createElement("p",null,n.text),t&&n.user.id===t.id&&c.a.createElement(W,{message:n}))},ie=function(e){var n=e.limit,t=e.me;return c.a.createElement(u.Query,{query:te,variables:{limit:n}},function(e){var a=e.data,i=e.loading,o=(e.error,e.fetchMore),u=e.subscribeToMore;if(!a)return c.a.createElement("div",null,"There are no messages yet ... Try to create one by yourself.");var s=a.messages;if(i||!s)return c.a.createElement(X,null);var l=s.edges,m=s.pageInfo;return c.a.createElement(r.Fragment,null,c.a.createElement(re,{messages:l,me:t,subscribeToMore:u}),m.hasNextPage&&c.a.createElement(ae,{limit:n,pageInfo:m,fetchMore:o},"More"))})};function oe(){var e=Object(S.a)(["\n  mutation($assignment_name: String!, $description: String, $url: String) {\n    createAssignment(\n      assignment_name: $assignment_name\n      description: $description\n      url: $url\n    ) {\n      id\n      assignment_name\n      description\n      url\n      createdAt\n      user {\n        id\n        username\n      }\n    }\n  }\n"]);return oe=function(){return e},e}var ue=A()(oe()),se=function(e){function n(){var e,t;Object(H.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=Object(P.a)(this,(e=Object(F.a)(n)).call.apply(e,[this].concat(r)))).state={assignment_name:"",description:"",url:""},t.onChange=function(e){var n=e.target,a=n.name,r=n.value;t.setState(Object(N.a)({},a,r))},t.onSubmit=function(){var e=Object(T.a)(Q.a.mark(function e(n,a){return Q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,a();case 4:t.setState({assignment_name:"",description:"",url:""}),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(1);case 9:case"end":return e.stop()}},e,this,[[1,7]])}));return function(n,t){return e.apply(this,arguments)}}(),t}return Object(U.a)(n,e),Object(_.a)(n,[{key:"render",value:function(){var e=this,n=this.state,t=n.assignment_name,a=n.description,r=n.url;return c.a.createElement(u.Mutation,{mutation:ue,variables:{assignment_name:t,description:a,url:r}},function(n,i){i.data,i.loading;var o=i.error;return c.a.createElement("form",{onSubmit:function(t){return e.onSubmit(t,n)}},c.a.createElement("textarea",{name:"assignment_name",value:t,onChange:e.onChange,type:"text",placeholder:"Your assignment name ... (REQUIRED)"}),c.a.createElement("textarea",{name:"description",value:a,onChange:e.onChange,type:"text",placeholder:"Add details and notes ..."}),c.a.createElement("textarea",{name:"url",value:r,onChange:e.onChange,type:"text",placeholder:"Add a link"}),c.a.createElement("button",{type:"submit"},"Submit"),o&&c.a.createElement(L,{error:o}))})}}]),n}(r.Component);function le(){var e=Object(S.a)(["\n  mutation($id: ID!) {\n    deleteAssignment(id: $id)\n  }\n"]);return le=function(){return e},e}function me(){var e=Object(S.a)(['\n  query {\n    assignments(order: "DESC") @connection(key: "AssignmentsConnection") {\n      edges {\n        id\n        assignment_name\n        description\n        url\n        createdAt\n        user {\n          id\n          username\n        }\n      }\n      pageInfo {\n        hasNextPage\n      }\n    }\n  }\n']);return me=function(){return e},e}var de=A()(me()),fe=A()(le()),ge=function(e){var n=e.assignment;return c.a.createElement(u.Mutation,{mutation:fe,variables:{id:n.id},update:function(e){var t=e.readQuery({query:de});e.writeQuery({query:de,data:Object(a.a)({},t,{assignments:Object(a.a)({},t.assignments,{edges:t.assignments.edges.filter(function(e){return e.id!==n.id}),pageInfo:t.assignments.pageInfo})})})}},function(e,n){return n.data,n.loading,n.error,c.a.createElement("button",{type:"button",onClick:e},"Delete")})};function pe(){var e=Object(S.a)(['\n  query($cursor: String, $limit: Int!) {\n    assignments(cursor: $cursor, limit: $limit)\n      @connection(key: "AssignmentsConnection") {\n      edges {\n        id\n        assignment_name\n        description\n        url\n        createdAt\n        user {\n          id\n          username\n        }\n      }\n      pageInfo {\n        hasNextPage\n        endCursor\n      }\n    }\n  }\n']);return pe=function(){return e},e}function he(){var e=Object(S.a)(["\n  subscription {\n    assignmentCreated {\n      assignment {\n        id\n        assignment_name\n        description\n        url\n        createdAt\n        user {\n          id\n          username\n        }\n      }\n    }\n  }\n"]);return he=function(){return e},e}var ve=A()(he()),be=A()(pe()),Ee=function(e){var n=e.limit,t=e.pageInfo,r=e.fetchMore,i=e.children;return c.a.createElement("button",{type:"button",onClick:function(){return r({variables:{cursor:t.endCursor,limit:n},updateQuery:function(e,n){var t=n.fetchMoreResult;return t?{assignments:Object(a.a)({},t.assignments,{edges:[].concat(Object(J.a)(e.assignments.edges),Object(J.a)(t.assignments.edges))})}:e}})}},i)},ye=function(e){function n(){var e,t;Object(H.a)(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(t=Object(P.a)(this,(e=Object(F.a)(n)).call.apply(e,[this].concat(c)))).subscribeToMoreAssignment=function(){t.props.subscribeToMore({document:ve,updateQuery:function(e,n){var t=n.subscriptionData;if(!t.data)return e;var r=t.data.assignmentCreated;return Object(a.a)({},e,{assignments:Object(a.a)({},e.assignments,{edges:[r.assignment].concat(Object(J.a)(e.assignments.edges))})})}})},t}return Object(U.a)(n,e),Object(_.a)(n,[{key:"componentDidMount",value:function(){this.subscribeToMoreAssignment()}},{key:"render",value:function(){var e=this.props,n=e.assignments,t=e.me;return n.map(function(e){return c.a.createElement(Oe,{key:e.id,assignment:e,me:t})})}}]),n}(r.Component),Oe=function(e){var n=e.assignment,t=e.me;return c.a.createElement("div",null,c.a.createElement("h3",null,n.user.username),c.a.createElement("small",null,n.createdAt),c.a.createElement("p",null,n.assignment_name),c.a.createElement("p",null,n.description),t&&n.user.id===t.id&&c.a.createElement(ge,{assignment:n}))},je=function(e){var n=e.limit,t=e.me;return c.a.createElement(u.Query,{query:be,variables:{limit:n}},function(e){var a=e.data,i=e.loading,o=(e.error,e.fetchMore),u=e.subscribeToMore;if(!a)return c.a.createElement("div",null,"There are no assignments yet ...");var s=a.assignments;if(i||!s)return c.a.createElement(X,null);var l=s.edges,m=s.pageInfo;return c.a.createElement(r.Fragment,null,c.a.createElement(ye,{assignments:l,me:t,subscribeToMore:u}),m.hasNextPage&&c.a.createElement(Ee,{limit:n,pageInfo:m,fetchMore:o},"More"))})},Ce=D(function(e){var n=e.session;return c.a.createElement("div",null,c.a.createElement("h2",null,"Landing page"),c.a.createElement("hr",null),n&&n.me&&c.a.createElement(je,{me:n.me,limit:2}),c.a.createElement("hr",null),n&&n.me&&c.a.createElement(G,null),n&&n.me&&c.a.createElement(ie,{me:n.me,limit:3}))}),ke=t(113);function xe(){var e=Object(S.a)(["\n  mutation($username: String!, $email: String!, $password: String!) {\n    signUp(username: $username, email: $email, password: $password) {\n      token\n    }\n  }\n"]);return xe=function(){return e},e}var we=A()(xe()),Se={username:"",email:"",password:"",passwordConfirmation:""},Me=function(e){function n(){var e,t;Object(H.a)(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(t=Object(P.a)(this,(e=Object(F.a)(n)).call.apply(e,[this].concat(c)))).state=Object(a.a)({},Se),t.onChange=function(e){var n=e.target,a=n.name,r=n.value;t.setState(Object(N.a)({},a,r))},t.onSubmit=function(e,n){n().then(function(){var e=Object(T.a)(Q.a.mark(function e(n){var r;return Q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.data,t.setState(Object(a.a)({},Se)),localStorage.setItem("token",r.signUp.token),e.next=5,t.props.refetch();case 5:t.props.history.push(E);case 6:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}()),e.preventDefault()},t}return Object(U.a)(n,e),Object(_.a)(n,[{key:"render",value:function(){var e=this,n=this.state,t=n.username,a=n.email,r=n.password,i=n.passwordConfirmation,o=r!==i||""===r||""===a||""===t;return c.a.createElement(u.Mutation,{mutation:we,variables:{username:t,email:a,password:r}},function(n,u){u.data;var s=u.loading,l=u.error;return c.a.createElement("form",{onSubmit:function(t){return e.onSubmit(t,n)}},c.a.createElement("input",{name:"username",value:t,onChange:e.onChange,type:"text",placeholder:"Full Name"}),c.a.createElement("input",{name:"email",value:a,onChange:e.onChange,type:"text",placeholder:"Email Address",autoComplete:"username"}),c.a.createElement("input",{name:"password",value:r,onChange:e.onChange,type:"password",placeholder:"Password",autoComplete:"new-password"}),c.a.createElement("input",{name:"passwordConfirmation",value:i,onChange:e.onChange,type:"password",placeholder:"Confirm Password",autoComplete:"new-password"}),c.a.createElement("button",{disabled:o||s,type:"submit"},"Sign Up"),l&&c.a.createElement(L,{error:l}))})}}]),n}(r.Component),Ae=function(){return c.a.createElement("p",null,"Don't have an account? ",c.a.createElement(b.a,{to:"/signup"},"Sign Up"))},Ie=Object(ke.a)(function(e){var n=e.history,t=e.refetch;return c.a.createElement("div",null,c.a.createElement("h1",null,"SignUp"),c.a.createElement(Me,{history:n,refetch:t}))});function $e(){var e=Object(S.a)(["\n  mutation($login: String!, $password: String!) {\n    signIn(login: $login, password: $password) {\n      token\n    }\n  }\n"]);return $e=function(){return e},e}var De=A()($e()),qe={login:"",password:""},Qe=function(e){function n(){var e,t;Object(H.a)(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(t=Object(P.a)(this,(e=Object(F.a)(n)).call.apply(e,[this].concat(c)))).state=Object(a.a)({},qe),t.onChange=function(e){var n=e.target,a=n.name,r=n.value;t.setState(Object(N.a)({},a,r))},t.onSubmit=function(e,n){n().then(function(){var e=Object(T.a)(Q.a.mark(function e(n){var r;return Q.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.data,t.setState(Object(a.a)({},qe)),localStorage.setItem("token",r.signIn.token),e.next=5,t.props.refetch();case 5:t.props.history.push(E);case 6:case"end":return e.stop()}},e,this)}));return function(n){return e.apply(this,arguments)}}()),e.preventDefault()},t}return Object(U.a)(n,e),Object(_.a)(n,[{key:"render",value:function(){var e=this,n=this.state,t=n.login,a=n.password,r=""===a||""===t;return c.a.createElement(u.Mutation,{mutation:De,variables:{login:t,password:a}},function(n,i){i.data;var o=i.loading,u=i.error;return c.a.createElement("form",{onSubmit:function(t){return e.onSubmit(t,n)}},c.a.createElement("input",{name:"login",value:t,onChange:e.onChange,type:"text",placeholder:"Email or Username",autoComplete:"username"}),c.a.createElement("input",{name:"password",value:a,onChange:e.onChange,type:"password",placeholder:"Password",autoComplete:"password"}),c.a.createElement("button",{disabled:r||o,type:"submit"},"Sign In"),u&&c.a.createElement(L,{error:u}))})}}]),n}(r.Component),Te=Object(ke.a)(function(e){var n=e.history,t=e.refetch;return c.a.createElement("div",null,c.a.createElement("h1",null,"SignIn"),c.a.createElement(Qe,{history:n,refetch:t}),c.a.createElement(Ae,null))}),Ne=t(112),He=function(e){return function(n){return function(t){return c.a.createElement(u.Query,{query:$},function(a){var r=a.data;return a.networkStatus<7?null:e(r)?c.a.createElement(n,t):c.a.createElement(Ne.a,{to:"/signin"})})}}},_e=He(function(e){return e&&e.me})(function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Account Page"))}),Pe=He(function(e){return e&&e.me&&"ADMIN"===e.me.role})(function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Admin Page"),c.a.createElement("hr",null),c.a.createElement(se,null))}),Fe=t(67),Ue=t.n(Fe);function Le(e){var n=e.deck,t=n.id,a=n.deckName,r=n.createdAt;return c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("h2",null,c.a.createElement(b.a,{to:"/deck/".concat(t)},a)),c.a.createElement("p",null,"Description coming soon..."),c.a.createElement("h5",null,"Created on ",c.a.createElement(Ue.a,{format:"YYYY-MM-DD HH:mm"},r))))}function Ye(){var e=Object(S.a)(['\n  query DeckQuery {\n    decks @connection(key: "DeckConnection") {\n      edges {\n        id\n        deckName\n        createdAt\n        cards {\n          id\n          front\n        }\n      }\n    }\n  }\n']);return Ye=function(){return e},e}var Re=A()(Ye()),Ge=function(e){function n(){return Object(H.a)(this,n),Object(P.a)(this,Object(F.a)(n).apply(this,arguments))}return Object(U.a)(n,e),Object(_.a)(n,[{key:"render",value:function(){return c.a.createElement(r.Fragment,null,c.a.createElement("h1",null,"Deck"),c.a.createElement(u.Query,{query:Re},function(e){var n=e.data,t=e.error;if(e.loading)return c.a.createElement(X,null);if(t)return c.a.createElement("p",null,"Error");var a=n.decks.edges;return c.a.createElement(r.Fragment,null,console.log(n),a.map(function(e){return c.a.createElement(Le,{key:e.id,deck:e})}))}))}}]),n}(r.Component),Je=D(function(e){var n=e.session;return c.a.createElement("div",null,c.a.createElement("h2",null,"Flashcards"),c.a.createElement("hr",null),n&&n.me&&c.a.createElement(Ge,null))}),Be=t(31),ze=t(68),Ke=t(69),Ve=function(e){function n(e){var t;return Object(H.a)(this,n),(t=Object(P.a)(this,Object(F.a)(n).call(this,e))).shuffle=Object(Ke.a)(function(e){return Object(ze.shuffle)(e)}),t.onGoToNext=function(){return t.setState({index:t.state.index+1})},t.handleMouseHover=t.handleMouseHover.bind(Object(Be.a)(Object(Be.a)(t))),t.state={index:0,isHovering:!1},t}return Object(U.a)(n,e),Object(_.a)(n,[{key:"handleMouseHover",value:function(){this.setState(this.toggleHoverState)}},{key:"toggleHoverState",value:function(e){return{isHovering:!e.isHovering}}},{key:"render",value:function(){var e=this.shuffle(this.props.cards),n=e[this.state.index];return this.state.index>=e.length?c.a.createElement("div",null,c.a.createElement("h1",null,"Finished")):c.a.createElement(r.Fragment,null,c.a.createElement("div",{onMouseEnter:this.handleMouseHover,onMouseLeave:this.handleMouseHover},c.a.createElement("h1",null,n.front)),this.state.isHovering&&c.a.createElement("div",null,c.a.createElement("h1",null,n.back)),c.a.createElement("p",null,c.a.createElement("button",{onClick:this.onGoToNext},"Next")))}}]),n}(r.Component);function We(){var e=Object(S.a)(["\n  query CardsQuery($id: ID!) {\n    deck(id: $id) {\n      id\n      deckName\n      cards {\n        id\n        front\n        back\n      }\n    }\n  }\n"]);return We=function(){return e},e}var Xe=A()(We()),Ze=function(e){function n(){return Object(H.a)(this,n),Object(P.a)(this,Object(F.a)(n).apply(this,arguments))}return Object(U.a)(n,e),Object(_.a)(n,[{key:"render",value:function(){var e=this.props.match.params.id;return e=parseInt(e),c.a.createElement(u.Query,{query:Xe,variables:{id:e}},function(e){var n=e.data,t=e.error;return e.loading?c.a.createElement(X,null):t?c.a.createElement("p",null,"Error"):c.a.createElement(Ve,{cards:n.deck.cards})})}}]),n}(r.Component),en=He(function(e){return e&&e.me})(Ze),nn=D(function(e){var n=e.session,t=e.refetch;return c.a.createElement(h.a,{history:O},c.a.createElement("div",null,c.a.createElement(w,{session:n}),c.a.createElement("hr",null),c.a.createElement(v.a,{exact:!0,path:E,component:function(){return c.a.createElement(Ce,null)}}),c.a.createElement(v.a,{exact:!0,path:"/signup",component:function(){return c.a.createElement(Ie,{refetch:t})}}),c.a.createElement(v.a,{exact:!0,path:"/signin",component:function(){return c.a.createElement(Te,{refetch:t})}}),c.a.createElement(v.a,{exact:!0,path:"/account",component:function(){return c.a.createElement(_e,null)}}),c.a.createElement(v.a,{exact:!0,path:"/admin",component:function(){return c.a.createElement(Pe,null)}}),c.a.createElement(v.a,{exact:!0,path:"/deck",component:function(){return c.a.createElement(Je,null)}}),c.a.createElement(v.a,{exact:!0,path:"/deck/:id",component:function(e){return c.a.createElement(en,e)}})))}),tn=new d.a({uri:"/graphql"}),an=new f.a({uri:"ws://localhost:8000/graphql",options:{reconnect:!0}}),rn=Object(m.e)(function(e){var n=e.query,t=Object(l.e)(n),a=t.kind,r=t.operation;return"OperationDefinition"===a&&"subscription"===r},an,tn),cn=new m.a(function(e,n){return e.setContext(function(e){var n=e.headers,t=void 0===n?{}:n;return{headers:Object(a.a)({},t,{"x-token":localStorage.getItem("token")})}}),n(e)}),on=Object(g.a)(function(e){var n=e.graphQLErrors,t=e.networkError;n&&n.forEach(function(e){var n=e.message;e.locations,e.path;console.log("GraphQL error",n),"NOT_AUTHENTICATED"===n?j(ln):"Context creation failed: Your session expired. Sign in again."===n&&j(ln)}),t&&(console.log("Network error",t),401===t.statusCode&&j(ln))}),un=m.a.from([cn,on,rn]),sn=new p.a,ln=new s.a({link:un,cache:sn});o.a.render(c.a.createElement(u.ApolloProvider,{client:ln},c.a.createElement(nn,null)),document.getElementById("root"))},52:function(e,n,t){e.exports=t(101)}},[[52,2,1]]]);
//# sourceMappingURL=main.e5878d89.chunk.js.map