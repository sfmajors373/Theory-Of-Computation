process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function (text) {
  if (text === 'quit\n') {
    done();
  }
  if(text.indexOf('\n')) {
    const lines = text.split('\n');
    for (let j = 0; j < lines.length; j++)
    {
      // console.log(line);
      for (let i = 0; i < words.length; i++)
      {
        // switch statement to enter states
        startState(line[j], j);
      }
    }
  }
});

const strings  = {};
const ints = {};

function startState(line, j);
  let words = lines[0].split(" ");
  switch(true)
  {
    case (word[i] === 'd_int');
    case (word[i] === 'd_string');
    case (word[i] === 'banana');
      typeExpression(word[i], i, line[j], j);
      break;
    case (word[i] === 'shout');
      printExpression(word[i], i, line[j], j);
      break;
    case (word[i] === 'embiggen'):
      embiggenExpression(word[i], i, line[j], j);
      break;
    case (word[i] === 'emshrinken'):
      enshrinkenExpression(word[i], i, line[j], j);
      break;
    case (word[i] === 'go' && word[i + 1] === 'bananas');
      whileExpression(word[i], i, line[j], j);
      break;
    case (word[i] === 'end'):
      return "end";
      break;
    default:
      isDefined(word[i]);
      break;
  }
}
function typeExpression(word, i, line, j)
// essentially this one seems to be for defining variables
{
  if (word === 'd_string')
  {
    let temp = line[i + 1];
    if (line[i + 2] != '=')
    {
      console.log("Error declaring variable");
    }
    else
    {
      strings[temp] = line[i + 3];
    }
  }
  else if (word === 'd_int')
  {
    let temp = line[i + 1];
    if (line[i + 2] != '=')
    {
      console.log("Error declaring variable");
    }
    else
    {
      ints[temp] = line[i + 3];
    }

  }
};

function printExpression(word, i, line, j)
{
  if (isDefined(word) != false)
  {
    console.log(isDefined(word));
  }
  else
  {
    console.log("Error finding variable to print");
  }
};

function embiggenExpression(word, i, line, j)
{
  if (isDefined(word[i + 1]))
  {
    if (strings[words[i + 1]])
    {
      console.log("Please don't try to embiggen the strings");
    }
    else if (ints[words[i + 1]])
    {
      ints[words[i + 1]] += 1;
    }
  }
  else
  {
    console.log("Variable to embiggen is not defined");
  }
}

function enshrinkenExpression(word, i, line, j)
{
  if (isDefined(word[i + 1]))
  {
    if (strings[words[i + 1]])
    {
      console.log("Please don't try to enshrinken the strings");
    }
    else if (ints[words[i + 1]])
    {
      ints[words[i + 1]] -= 1;
    }
  }
  else
  {
    console.log("Variable to enshrinken is not defined");
  }
}

function whileExpression(word, i, line, j)
{
  if (isDefined(word + 2) != false)
  {
    while (comparison(word, i, line, j);
    startState(line[j +1]);
  }
  else
  {
    console.log("Error identifying variable in while loop");
  }
}

function isDefined(word)
{
  if (strings[word])
  {
    return strings[word];
  }
  else if (ints[word])
  {
    return ints[word];
  }
  else
  {
    return false;
  }
};

function comparison(word, i, line, j)
{
  const compVar = isDefined(word);
  if (compVar)
  {
    if (word[i + 1] === 'bigger') // I think the + 1 may be wrong, but I'll come back if it is an issue
    {
      if (compVar > word[i + 2])
      {
        return true;
      }
      else
      {
        return false;
      }
    }
    else if (word[i + 1] === 'smaller') // see that note about the + 1 issue, word may come in as word[i + 3], so saying i + 1 would be backwards and not forwards
    {
      if (compVar < word[i + 2])
      {
        return true;
      }
      else
      {
        return false;
      }
    }
  }
}
