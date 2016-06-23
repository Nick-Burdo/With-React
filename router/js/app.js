/**
 * @copyright Iterios
 * @author Nick Burdo <n.burdo@iterios.com>
 * @version 2.1.1 23.06.16
 * @since 2.1.1
 */

//var Router = window.ReactRouter.Router;
//var Route = window.ReactRouter.Route;
//var IndexRoute = window.ReactRouter.IndexRoute;
//var Link = window.ReactRouter.Link;
//var browserHistory = window.ReactRouter.browserHistory;

var { Router, Route, IndexRoute, Link, browserHistory } = window.ReactRouter;

var MainLayout = React.createClass({
    render: function () {
        return (
            <div className="app">
                <header className="primary-header">
                    HEADER
                </header>

                <aside className="primary-aside">
                    <ul>
                        <li>
                            <Link to="/router" activeClassName="active">Home</Link>
                        </li>
                        <li>
                            <Link to="/router/users" activeClassName="active">Users</Link>
                        </li>
                        <li>
                            <Link to="/router/widgets" activeClassName="active">Widgets</Link>
                        </li>
                    </ul>
                </aside>

                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
});

var Home = React.createClass({
    render: function () {
        return (
            <div className="home-page">
                <h1>Welcome to the Home Page</h1>
            </div>
        );
    }
});


var SearchLayout = React.createClass({
    render: function () {
        return (
            <div className="search">
                <header className="search-header">
                    Search users
                </header>
                <div className="search-results">
                    {this.props.children}
                </div>
                <div className="search-footer pagination">
                    4 result
                </div>
            </div>
        );
    }
});

var UserList = React.createClass({
    render: function () {
        return (
            <ul className="user-list">
                <li>Dan</li>
                <li>Ryan</li>
                <li>Michael</li>
            </ul>
        );
    }
});

var Widgetist = React.createClass({
    render: function () {
        return (
            <ul className="widget-list">
                <li>Widget Dan</li>
                <li>Widget Ryan</li>
                <li>Widget Michael</li>
            </ul>
        );
    }
});


ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="router" component={MainLayout}>
            <IndexRoute component={Home}/>
            <Route component={SearchLayout}>
                <Route path="users" component={UserList}/>
                <Route path="widgets" component={Widgetist}/>
            </Route>
        </Route>
    </Router>,
    document.getElementById('content'));