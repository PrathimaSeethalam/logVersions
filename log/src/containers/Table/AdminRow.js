/**
 * @author Prathima S R
 * @email prathima5raj@yahoo.com
 * @create date 2020-08-29 11:37:12
 * @modify date 2020-08-29  11:37:12
 */

import React from 'react';
import { connect } from 'react-redux';
import EditableCell from '../../components/TableComponents/EditableCell';
import EditableTask from '../../components/TableComponents/EditableTask';
import CustomizedButton from '../../components/Button/Button';
import { Progress, Button, Alert } from 'antd';
import Constants from '../../constants/Constants';
import moment from 'moment';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

import {
    addReleaseData,
    versionName,
    getReleaseStartDate,
    getReleaseEndDate
} from '../../store/actions/VersionsActions';

class AdminRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDateEligible: true,
            isInvalidDate: false,
            isEdit: false,
            sum: 0,
            isAdded: false,
            products: [
                {
                    id: 1,
                    isEditable: false,
                    role: 'capsules user',
                    taskStartDate: '23/08/2009',
                    taskEndDate: '09/07/2020',
                    taskStatus: 'IN PROGRESS',
                    taskDesc: 'fghjk',
                    taskName: 'Task 1.0',
                    //we can change this value and check the value of version progress
                    progress: 30
                },
                {
                    id: 2,
                    isEditable: false,
                    role: 'capsules user',
                    taskStartDate: '23/08/2009',
                    taskEndDate: '09/07/2020',
                    taskStatus: 'IN PROGRESS',
                    taskDesc: 'fghjk',
                    taskName: 'Task 1.0',
                    //we can change this value and check the value of version progress
                    progress: 20
                },
                {
                    id: 3,
                    isEditable: false,
                    role: 'capsules user',
                    taskStartDate: '23/08/2009',
                    taskEndDate: '09/07/2020',
                    taskStatus: 'IN PROGRESS',
                    taskDesc: 'fghjk',
                    taskName: 'Task 1.0',
                    //we can change this value and check the value of version progress
                    progress: 10
                },
                {
                    id: 4,
                    isEditable: false,

                    role: 'capsules user',
                    taskStartDate: '23/08/2009',
                    taskEndDate: '09/07/2020',
                    taskStatus: 'IN PROGRESS',
                    taskDesc: 'fghjk',
                    taskName: 'Task 1.0',
                    //we can change this value and check the value of version progress
                    progress: 90
                },
                {
                    id: 5,
                    isEditable: false,

                    role: 'capsules user',
                    taskStartDate: '23/08/2009',
                    taskEndDate: '09/07/2020',
                    taskStatus: 'IN PROGRESS',
                    taskDesc: 'fghjk',
                    taskName: 'Task 1.0',
                    //we can change this value and check the value of version progress
                    progress: 70
                },
                {
                    id: 6,
                    isEditable: false,
                    role: 'capsules user',
                    taskStartDate: '23/08/2009',
                    taskEndDate: '09/07/2020',
                    taskStatus: 'IN PROGRESS',
                    taskDesc: 'fghjk',
                    taskName: 'Task 1.0',
                    //we can change this value and check the value of version progress
                    progress: 0
                }
            ]
        };
    }
    componentDidMount() {
        let newArr = [];
        this.state.products.forEach(p => {
            newArr.push(p.progress);
        });
        this.setState({
            sum: newArr.reduce((a, b) => a + b) / this.state.products.length
        });
    }

    increase(i) {
        const newItemsArr = this.state.products.map((obj, j) => {
            if (j === i) {
                return { ...obj, progress: obj.progress + 10 };
            } else {
                return { ...obj };
            }
        });
        this.setState({ products: newItemsArr });
        let newArr = [];
        this.state.products.forEach(p => {
            newArr.push(p.progress);
        });
        this.setState({
            sum: newArr.reduce((a, b) => a + b) / this.state.products.length + 2
        });
    }
    onTaskDelete(i) {
        //works for individual task deleteion
        var index = i;
        this.state.products.splice(index, 1);
        this.setState(this.state.products);
        let newArr = [];
        this.state.products.forEach(p => {
            newArr.push(p.progress);
        });

        this.setState({
            sum: newArr.reduce((a, b) => a + b) / this.state.products.length
        });
    }
    onTaskEdit(i) {
        const newItemsArr = this.state.products.map((obj, j) => {
            if (j === i) {
                return { ...obj, isEditable: !obj.isEditable };
            } else {
                return { ...obj };
            }
        });
        this.setState({ products: newItemsArr });
    }

    decline(i) {
        const newItemsArr = this.state.products.map((obj, j) => {
            if (j === i) {
                return { ...obj, progress: obj.progress - 10 };
            } else {
                return { ...obj };
            }
        });
        this.setState({
            products: newItemsArr
        });
        let newArr = [];
        this.state.products.forEach(p => {
            newArr.push(p.progress);
        });
        this.setState({
            sum: newArr.reduce((a, b) => a + b) / this.state.products.length - 2
        });
    }
    closeTasks = () => {
        this.setState({
            isAdded: false
        });
    };
    renderAddTasks = () => {
        this.setState({
            isAdded: true
            // totalTasks: this.state.totalTasks + 1
        });
        this.state.products.push({
            id: 1,
            role: 'capsules user',
            taskStartDate: '23/08/2009',
            taskEndDate: '09/07/2020',
            taskStatus: 'IN PROGRESS',
            taskDesc: 'fghjk',
            taskName: 'Task 1.0',
            //we can change this value and check the value of version progress
            progress: 0,
            isEditable: false
        });

        var index = this.state.products.length;
        // this.state.products.splice(index, 1);
        this.setState(this.state.products);
        let newArr = [];
        this.state.products.forEach(p => {
            newArr.push(p.progress);
        });
        this.setState({
            sum: newArr.reduce((a, b) => a + b) / this.state.products.length
        });
    };

    renderTasks = () => {
        //actually we should make api call here
        this.setState({
            isAdded: true
        });
    };
    onDelete = () => {
        this.props.onDelEvent(this.props.product);
    };

    handleUserInput(filterText) {
        this.setState({ filterText: filterText });
    }
    handleRowDel(product) {
        var index = this.state.products.indexOf(product);
        this.state.products.splice(index, 1);
        this.setState(this.state.products);
    }

    handleAddEvent(evt) {
        var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(
            36
        );
        var product = {
            id: id,
            taskName: '',
            taskStatus: '',
            taskDesc: '',
            taskProgress: '',
            isEditable: '',
            progress: 0
        };
        this.state.products.push(product);
        this.setState(this.state.products);
    }

    onEdit(product) {
        this.setState({
            isEdit: !this.state.isEdit
        });
    }

    handleProductTable(evt) {
        var item = {
            id: evt.target.id,
            name: evt.target.name,
            value: evt.target.value
        };

        this.props.addReleaseData(evt.target.name, evt.target.value);
        if (evt.target.name === 'taskStartDate') {
            if (
                moment(evt.target.value, 'DD/MM/YYYY', true).isValid() == true
            ) {
                this.props.getReleaseStartDate(evt.target.value);

                this.setState({
                    isInvalidDate: false
                });

                if (
                    moment(evt.target.value, 'DD/MM/YYYY').format(
                        'YYYY-MM-DD'
                    ) >
                    moment(this.props.addVersions.endDate, 'DD/MM/YYYY').format(
                        'YYYY-MM-DD'
                    )
                ) {
                    this.setState({
                        isDateEligible: false
                    });
                } else if (
                    moment(evt.target.value, 'DD/MM/YYYY').format(
                        'YYYY-MM-DD'
                    ) <
                    moment(this.props.addVersions.endDate, 'DD/MM/YYYY').format(
                        'YYYY-MM-DD'
                    )
                ) {
                    this.setState({
                        isDateEligible: true
                    });
                } else {
                    this.setState({
                        isDateEligible: false
                    });
                }
            } else {
                this.setState({
                    isInvalidDate: true,
                    isDateEligible: true
                });
            }
        }
        if (evt.target.name === 'taskEndDate') {
            if (
                moment(evt.target.value, 'DD/MM/YYYY', true).isValid() == true
            ) {
                this.props.getReleaseEndDate(evt.target.value);

                this.setState({
                    isInvalidDate: false
                });

                if (
                    moment(evt.target.value, 'DD/MM/YYYY').format(
                        'YYYY-MM-DD'
                    ) >
                    moment(
                        this.props.addVersions.startDate,
                        'DD/MM/YYYY'
                    ).format('YYYY-MM-DD')
                ) {
                    this.setState({
                        isDateEligible: true
                    });
                } else if (
                    moment(evt.target.value, 'DD/MM/YYYY').format(
                        'YYYY-MM-DD'
                    ) <
                    moment(
                        this.props.addVersions.startDate,
                        'DD/MM/YYYY'
                    ).format('YYYY-MM-DD')
                ) {
                    this.setState({
                        isDateEligible: false
                    });
                } else {
                    this.setState({
                        isDateEligible: false
                    });
                }
            } else {
                // alert(
                //     'invalid date format is being entered.Please correct it!'
                // );
                this.setState({
                    isInvalidDate: true,
                    isDateEligible: true
                });
            }
        }
        var products = this.state.products.slice();
        var newProducts = products.map(function(product) {
            for (var key in product) {
                if (key == item.name && product.id == item.id) {
                    product[key] = item.value;
                }
            }
            return product;
        });
        this.setState({ products: newProducts });
    }

    render() {
        const { isAdded, isInvalidDate, isDateEligible } = this.state;
        return (
            <>
                <tr className='eachRow' key={this.props.releaseIndex}>
                    <EditableCell
                        isEdit={this.state.isEdit}
                        onProductTableUpdate={this.props.onProductTableUpdate}
                        cellData={{
                            type: 'versionName',
                            value: this.props.product.versionName,
                            id: this.props.product.id
                        }}
                    />
                    <EditableCell
                        isEdit={this.state.isEdit}
                        onProductTableUpdate={this.props.onProductTableUpdate}
                        cellData={{
                            type: 'versionStatus',
                            // value: this.props.product.versionStatus,
                            value:
                                this.state.sum === 0
                                    ? 'UNRELEASED'
                                    : this.state.sum > 0 && this.state.sum < 100
                                    ? 'IN PROGRESS'
                                    : 'COMPLETED',

                            id: this.props.product.id
                        }}
                    />
                    <td>
                        <Progress
                            percent={this.state.sum}
                            size='small'
                            status='active'
                        />
                    </td>

                    <EditableCell
                        isEdit={this.state.isEdit}
                        onProductTableUpdate={this.props.onProductTableUpdate}
                        cellData={{
                            type: 'description',
                            value: this.props.product.description,
                            id: this.props.product.id
                        }}
                    />
                    <EditableCell
                        isEdit={this.state.isEdit}
                        onProductTableUpdate={this.props.onProductTableUpdate}
                        cellData={{
                            type: 'startDate',
                            value: this.props.product.startDate,
                            id: this.props.product.id
                        }}
                    />
                    <EditableCell
                        isEdit={this.state.isEdit}
                        onProductTableUpdate={this.props.onProductTableUpdate}
                        cellData={{
                            type: 'endDate',
                            value: this.props.product.endDate,
                            id: this.props.product.id
                        }}
                    />
                    <td className='del-cell'>
                        <input
                            type='button'
                            onClick={this.onDelete}
                            value='X'
                            className='del-btn'
                        />
                        <input
                            type='button'
                            onClick={this.onEdit.bind(
                                this,
                                this.props.releaseIndex
                            )}
                            value={this.state.isEdit ? 'Save' : 'Edit'}
                            className='del-btn'
                        />
                        <CustomizedButton
                            buttonname={'Show tasks'}
                            onClick={this.renderTasks}
                        ></CustomizedButton>
                        <CustomizedButton
                            buttonname={'close tasks'}
                            onClick={this.closeTasks}
                        ></CustomizedButton>
                        <CustomizedButton
                            buttonname={'Add tasks'}
                            onClick={this.renderAddTasks}
                        ></CustomizedButton>
                    </td>
                    {isInvalidDate ? (
                        <Alert
                            style={{ margin: '10px' }}
                            message='Invalid date format!'
                            type='error'
                        />
                    ) : isDateEligible ? null : (
                        <Alert
                            style={{ margin: '10px' }}
                            message='The start date should be lesser than end date! or  The end date should be greater than the start date! Kindly edit the Date accordingly until this error escapes'
                            type='error'
                        />
                    )}
                </tr>
                {isAdded ? (
                    <>
                        <tr>
                            <th>{Constants.taskName}</th>
                            <th>{Constants.status}</th>
                            <th>{Constants.progress}</th>
                            <th>{Constants.desc}</th>
                            <th>{Constants.start_date}</th>
                            <th>{Constants.end_date}</th>
                            <th>{Constants.action}</th>
                        </tr>
                        {this.state.products.map((task, i) => {
                            // this.state.tasksMonitor.push(task.progress);
                            return (
                                <tr key={'task' + i}>
                                    <EditableTask
                                        isEdit={task.isEditable}
                                        onProductTableUpdate={this.handleProductTable.bind(
                                            this
                                        )}
                                        type={'taskName'}
                                        value={task.taskName}
                                        id={task.id}
                                    />
                                    <EditableTask
                                        isEdit={task.isEditable}
                                        onProductTableUpdate={this.handleProductTable.bind(
                                            this
                                        )}
                                        type={'taskStatus'}
                                        value={
                                            task.progress === 0
                                                ? 'UNRELEASED'
                                                : task.progress > 0 &&
                                                  task.progress < 100
                                                ? 'IN PROGRESS'
                                                : 'COMPLETED'
                                        }
                                        id={task.id}
                                    />
                                    <td>
                                        <Progress
                                            percent={task.progress}
                                            size='small'
                                            status='active'
                                        />
                                        <Button.Group>
                                            <Button
                                                onClick={
                                                    task.progress === 0
                                                        ? null
                                                        : this.decline.bind(
                                                              this,
                                                              i
                                                          )
                                                }
                                                icon={<MinusOutlined />}
                                            />
                                            <Button
                                                onClick={
                                                    task.progress === 100
                                                        ? null
                                                        : this.increase.bind(
                                                              this,
                                                              i
                                                          )
                                                }
                                                icon={<PlusOutlined />}
                                            />
                                        </Button.Group>
                                    </td>

                                    <EditableTask
                                        isEdit={task.isEditable}
                                        onProductTableUpdate={this.handleProductTable.bind(
                                            this
                                        )}
                                        type={'taskDesc'}
                                        value={task.taskDesc}
                                        id={task.id}
                                    />
                                    <EditableTask
                                        isEdit={task.isEditable}
                                        onProductTableUpdate={this.handleProductTable.bind(
                                            this
                                        )}
                                        type={'taskStartDate'}
                                        value={task.taskStartDate}
                                        id={task.id}
                                    />
                                    <EditableTask
                                        isEdit={task.isEditable}
                                        onProductTableUpdate={this.handleProductTable.bind(
                                            this
                                        )}
                                        type={'taskEndDate'}
                                        value={task.taskEndDate}
                                        id={task.id}
                                    />
                                    <td className='del-cell'>
                                        <input
                                            type='button'
                                            onClick={this.onTaskDelete.bind(
                                                this,
                                                i
                                            )}
                                            value='X'
                                            className='del-btn'
                                        />
                                        <input
                                            type='button'
                                            onClick={this.onTaskEdit.bind(
                                                this,
                                                i
                                            )}
                                            value={
                                                // this.state.isEdit
                                                task.isEditable
                                                    ? 'Save'
                                                    : 'Edit'
                                            }
                                            className='del-btn'
                                        />
                                    </td>
                                </tr>
                            );
                        })}
                    </>
                ) : null}
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        addVersions: state.addVersions
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addReleaseData: (key, value) => dispatch(addReleaseData(key, value)),
        versionName: name => dispatch(versionName(name)),
        getReleaseStartDate: startDate =>
            dispatch(getReleaseStartDate(startDate)),
        getReleaseEndDate: endDate => dispatch(getReleaseEndDate(endDate))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AdminRow);
