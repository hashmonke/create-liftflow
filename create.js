// script to input goal to question 3 (goal -> sub-goal)
    const txt1 = document.getElementById('goal');
    const btn1 = document.getElementById('btn1');
    const out1 = document.getElementById('output1');

function fun1() {
    output1.innerHTML = "How will you "+txt1.value+"? (sub-goal)"
}

btn1.addEventListener('click',fun1);

// script to add and remove sub-goals
function add(){
      var new_chq_no = parseInt($('#total_chq').val())+1;
      var new_input="<input type='text' id='new_"+new_chq_no+"'>";
      $('#new_chq').append(new_input);
      $('#total_chq').val(new_chq_no)
    }
    function remove(){
      var last_chq_no = $('#total_chq').val();
      if(last_chq_no>1){
        $('#new_'+last_chq_no).remove();
        $('#total_chq').val(last_chq_no-1);

        $(function add(){
      $("input[type='text']").prop('min',0);
      $("input[type='text']").prop('max',3);

});

      }
    }

// script to input sub-goal to task 1
  const txt2 = document.getElementById('goal2');
  const btn2 = document.getElementById('btn2');
  const out2 = document.getElementById('output2');

function fun2() {
  output2.innerHTML = "What must happen in order for you to "+txt2.value+"? (sub-goal #1)"
}

btn2.addEventListener('click',fun2);

  // script to add and remove task 1
function add2(){
      var new_chq_no = parseInt($('#total_chq2').val())+1;
      var new_input="<input type='text' id='new_"+new_chq_no+"'>";
      $('#new_chq2').append(new_input);
      $('#total_chq2').val(new_chq_no)
    }
    function remove2(){
      var last_chq_no = $('#total_chq2').val();
      if(last_chq_no>1){
        $('#new_'+last_chq_no).remove();
        $('#total_chq2').val(last_chq_no-1);

        $(function add2(){
      $("input[type='text']").prop('min',0);
      $("input[type='text']").prop('max',3);

});

      }
    }
