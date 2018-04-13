(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var Task = /** @class */ (function () {
    function Task(name) {
        this.name = name;
        this.id = new Date().getTime().toString();
        this.status = false;
    }
    return Task;
}());
var TaskManager = /** @class */ (function () {
    function TaskManager(array) {
        this.tasks = array;
    }
    TaskManager.prototype.add = function (task) {
        this.tasks.push(task);
        console.log(this.tasks);
    };
    return TaskManager;
}());
var ListView = /** @class */ (function () {
    function ListView(listid) {
        this.list = document.getElementById(listid);
    }
    ListView.prototype.render = function (items) {
        var _this = this;
        items.forEach(function (task) {
            var id = task.id;
            var name = task.name;
            var status = task.status;
            var template = "<li id=\"" + id + "\" data-status=\"" + status + ">\n                          <div class=\"task-container\">\n                            <div class=\"task-name\">" + name + "</div>\n                            <div class=\"task-button\">\n                              <button type=\"button\" data-function=\"status\">&#x2714;</button>\n                              <button type=\"button\" data-function=\"delete\">&times;</button>\n                            </div>\n                          </div>\n                        </li>";
            var fragmen = document.createRange().createContextualFragment(template);
            _this.list.appendChild(fragmen);
        });
    };
    ;
    ListView.prototype.clear = function () {
        this.list.innerHTML = '';
    };
    return ListView;
}());
var DataStorage = /** @class */ (function () {
    function DataStorage() {
        this.storage = window.localStorage;
    }
    DataStorage.prototype.store = function (array) {
        var data = JSON.stringify(array);
        this.storage.setItem('taskdata', data);
    };
    DataStorage.prototype.read = function () {
        var data = this.storage.getItem('taskdata');
        var array = JSON.parse(data);
        return array;
    };
    return DataStorage;
}());
window.addEventListener('load', function () {
    listview.clear();
    var taskdata = taskstorage.read();
    //console.log(taskdata);
    if (taskdata.length > 0) {
        taskdata.forEach(function (item) { taskarray.push(item); });
        listview.render(taskarray);
    }
});
//initialise
var taskarray = [];
var taskstorage = new DataStorage();
var taskmanager = new TaskManager(taskarray);
var listview = new ListView('task-list');
// reference to form
var taskform = document.getElementById('task-form');
taskform.addEventListener('submit', function (event) {
    event.preventDefault();
    var input = document.getElementById('task-input');
    var taskname = input.value;
    //console.log(taskname);
    var task = new Task(taskname);
    taskmanager.add(task);
    listview.clear();
    taskstorage.store(taskarray);
    listview.render(taskarray);
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0cy90b2RvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7SUFJRSxjQUFZLElBQUk7UUFDZCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUNILFdBQUM7QUFBRCxDQVRBLEFBU0MsSUFBQTtBQUVEO0lBRUUscUJBQVksS0FBa0I7UUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUNELHlCQUFHLEdBQUgsVUFBSSxJQUFVO1FBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FUQSxBQVNDLElBQUE7QUFFRDtJQUVFLGtCQUFZLE1BQWM7UUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFDRCx5QkFBTSxHQUFOLFVBQU8sS0FBa0I7UUFBekIsaUJBa0JDO1FBakJDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO1lBQ2pCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDakIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNyQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBRXpCLElBQUksUUFBUSxHQUFHLGNBQVcsRUFBRSx5QkFBa0IsTUFBTSwwSEFFTCxJQUFJLDRXQU0zQixDQUFDO1lBQ3pCLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN4RSxLQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFBQSxDQUFDO0lBRUYsd0JBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFDLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBQ0gsZUFBQztBQUFELENBNUJBLEFBNEJDLElBQUE7QUFFRDtJQUVFO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDO0lBQ3JDLENBQUM7SUFDRCwyQkFBSyxHQUFMLFVBQU8sS0FBa0I7UUFDdkIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNELDBCQUFJLEdBQUo7UUFDRSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM1QyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FkQSxBQWNDLElBQUE7QUFFRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFO0lBQzlCLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNqQixJQUFJLFFBQVEsR0FBRyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDbEMsd0JBQXdCO0lBQ3hCLElBQUcsUUFBUSxDQUFDLE1BQU0sR0FBQyxDQUFDLEVBQ3BCO1FBQ0UsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUksSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUM7UUFDbEQsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUM1QjtBQUVILENBQUMsQ0FBQyxDQUFDO0FBR0gsWUFBWTtBQUNaLElBQUksU0FBUyxHQUFnQixFQUFFLENBQUM7QUFDaEMsSUFBSSxXQUFXLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztBQUNwQyxJQUFJLFdBQVcsR0FBRyxJQUFJLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM3QyxJQUFJLFFBQVEsR0FBRyxJQUFJLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUV6QyxvQkFBb0I7QUFDcEIsSUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUN0RCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQUMsS0FBWTtJQUMvQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDdkIsSUFBSSxLQUFLLEdBQWUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM5RCxJQUFJLFFBQVEsR0FBc0IsS0FBTSxDQUFDLEtBQUssQ0FBQztJQUMvQyx3QkFBd0I7SUFDeEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUIsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUV0QixRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakIsV0FBVyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM3QixRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzdCLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY2xhc3MgVGFza3tcclxuICBpZDogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBzdGF0dXM6IGJvb2xlYW47XHJcbiAgY29uc3RydWN0b3IobmFtZSl7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5pZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpLnRvU3RyaW5nKCk7XHJcbiAgICB0aGlzLnN0YXR1cyA9IGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgVGFza01hbmFnZXJ7XHJcbiAgdGFza3MgOiBBcnJheTxUYXNrPjtcclxuICBjb25zdHJ1Y3RvcihhcnJheTogQXJyYXk8VGFzaz4pe1xyXG4gICAgdGhpcy50YXNrcyA9IGFycmF5O1xyXG4gIH1cclxuICBhZGQodGFzazogVGFzayl7XHJcbiAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnRhc2tzKTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIExpc3RWaWV3e1xyXG4gIGxpc3Q6SFRNTEVsZW1lbnQ7XHJcbiAgY29uc3RydWN0b3IobGlzdGlkOiBzdHJpbmcpe1xyXG4gICAgdGhpcy5saXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGlzdGlkKTtcclxuICB9XHJcbiAgcmVuZGVyKGl0ZW1zOiBBcnJheTxUYXNrPil7XHJcbiAgICBpdGVtcy5mb3JFYWNoKCh0YXNrKT0+IHtcclxuICAgICAgbGV0IGlkID0gdGFzay5pZDtcclxuICAgICAgbGV0IG5hbWUgPSB0YXNrLm5hbWU7XHJcbiAgICAgIGxldCBzdGF0dXMgPSB0YXNrLnN0YXR1cztcclxuICAgICAgXHJcbiAgICAgIGxldCB0ZW1wbGF0ZSA9IGA8bGkgaWQ9XCIke2lkfVwiIGRhdGEtc3RhdHVzPVwiJHtzdGF0dXN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stbmFtZVwiPiR7bmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBkYXRhLWZ1bmN0aW9uPVwic3RhdHVzXCI+JiN4MjcxNDs8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgZGF0YS1mdW5jdGlvbj1cImRlbGV0ZVwiPiZ0aW1lczs8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPmA7XHJcbiAgICAgIGxldCBmcmFnbWVuID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKS5jcmVhdGVDb250ZXh0dWFsRnJhZ21lbnQodGVtcGxhdGUpO1xyXG4gICAgICB0aGlzLmxpc3QuYXBwZW5kQ2hpbGQoZnJhZ21lbik7XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIFxyXG4gIGNsZWFyKCl7XHJcbiAgICB0aGlzLmxpc3QuaW5uZXJIVE1MPScnO1xyXG4gIH1cclxufSAgXHJcblxyXG5jbGFzcyBEYXRhU3RvcmFnZXtcclxuICBzdG9yYWdlOiBhbnk7XHJcbiAgY29uc3RydWN0b3IoKXtcclxuICAgIHRoaXMuc3RvcmFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2U7XHJcbiAgfVxyXG4gIHN0b3JlKCBhcnJheTogQXJyYXk8VGFzaz4pe1xyXG4gICAgbGV0IGRhdGEgPSBKU09OLnN0cmluZ2lmeShhcnJheSk7XHJcbiAgICB0aGlzLnN0b3JhZ2Uuc2V0SXRlbSgndGFza2RhdGEnLCBkYXRhKTtcclxuICB9XHJcbiAgcmVhZCgpe1xyXG4gICAgbGV0IGRhdGEgPSB0aGlzLnN0b3JhZ2UuZ2V0SXRlbSgndGFza2RhdGEnKTtcclxuICAgIGxldCBhcnJheSA9IEpTT04ucGFyc2UoZGF0YSk7XHJcbiAgICByZXR1cm4gYXJyYXk7XHJcbiAgfVxyXG59XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpPT57XHJcbiAgbGlzdHZpZXcuY2xlYXIoKTtcclxuICBsZXQgdGFza2RhdGEgPSB0YXNrc3RvcmFnZS5yZWFkKCk7XHJcbiAgLy9jb25zb2xlLmxvZyh0YXNrZGF0YSk7XHJcbiAgaWYodGFza2RhdGEubGVuZ3RoPjApXHJcbiAge1xyXG4gICAgdGFza2RhdGEuZm9yRWFjaCgoaXRlbSk9Pnt0YXNrYXJyYXkucHVzaChpdGVtKTt9KTtcclxuICAgIGxpc3R2aWV3LnJlbmRlcih0YXNrYXJyYXkpO1xyXG4gIH0gIFxyXG4gIFxyXG59KTtcclxuXHJcblxyXG4vL2luaXRpYWxpc2VcclxudmFyIHRhc2thcnJheTogQXJyYXk8VGFzaz4gPSBbXTtcclxudmFyIHRhc2tzdG9yYWdlID0gbmV3IERhdGFTdG9yYWdlKCk7XHJcbnZhciB0YXNrbWFuYWdlciA9IG5ldyBUYXNrTWFuYWdlcih0YXNrYXJyYXkpO1xyXG52YXIgbGlzdHZpZXcgPSBuZXcgTGlzdFZpZXcoJ3Rhc2stbGlzdCcpO1xyXG5cclxuLy8gcmVmZXJlbmNlIHRvIGZvcm1cclxuY29uc3QgdGFza2Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1mb3JtJyk7XHJcbnRhc2tmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudDogRXZlbnQpPT57XHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICBsZXQgaW5wdXQ6SFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1pbnB1dCcpO1xyXG4gIGxldCB0YXNrbmFtZSA9ICg8SFRNTElucHV0RWxlbWVudD5pbnB1dCkudmFsdWU7XHJcbiAgLy9jb25zb2xlLmxvZyh0YXNrbmFtZSk7XHJcbiAgbGV0IHRhc2sgPSBuZXcgVGFzayh0YXNrbmFtZSk7XHJcbiAgdGFza21hbmFnZXIuYWRkKHRhc2spO1xyXG4gIFxyXG4gIGxpc3R2aWV3LmNsZWFyKCk7XHJcbiAgdGFza3N0b3JhZ2Uuc3RvcmUodGFza2FycmF5KTtcclxuICBsaXN0dmlldy5yZW5kZXIodGFza2FycmF5KTtcclxufSk7XHJcbiJdfQ==
