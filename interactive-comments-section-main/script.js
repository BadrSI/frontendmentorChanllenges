// TODO: try data attibutes solution.
import data from './data.json' assert {type: 'json'}
// const data = {currentUser: '', comments: []};
const {currentUser, comments} = data;
console.log(currentUser, comments);

function createElementWithClass(elementTag, ...className) {
  const element = document.createElement(elementTag);
  
  if (className.length !== 0)
    element.classList.add(...className);

  return element;
}

function createCommentComponent(commentDetails, currentUser) { 
  const {id, content, createdAt, score, user} = commentDetails;
  const {username, image } = currentUser;
  const commentElemetTemplate = `
<div id="${user.username}" data-comment-id="${id}" class="comment">
  <div class="comment-replay-container">
    <div class="comment-container">
      <div class="mobile">
        <div class="counter-container">
          <button onclick="toggleScore('${id}', '+')">
            <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" fill="#C5C6EF"/></svg>
          </button>
          <p>${score}</p>
          <button onclick="toggleScore('${id}', '-')">
            <svg width="11" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" fill="#C5C6EF"/></svg>
          </button>
        </div>
        <div class="interactive-btns">
          ${username !== user.username ? 
            (`<button class="secondary-btn" onclick="replayToComment(${user.username})">
              <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" fill="#5357B6"/></svg>
              Replay
            </button>`) : 
            (`<button class="secondary-btn delete-btn">
                <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" fill="#ED6368"/></svg>
                Delete
              </button>
              <button class="secondary-btn">
                <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z" fill="#5357B6"/></svg>
                Edit
              </button>`)
            }
        </div>
      </div>
      <div class="content-container">
        <div class="header-info" >
        <div class="user-info">
            <img src="${user.image.webp}" alt="image ${user.username}" />
            <p class="user-name">${user.username}</p>
            <p class="comment-at">${createdAt}</p>
          </div>
          <div class="interactive-btns">
            ${username !== user.username ? 
              (`<button class="secondary-btn" onclick="replayToComment(${user.username})">
                <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" fill="#5357B6"/></svg>
                Replay
              </button>`) : 
              (`<button class="secondary-btn delete-btn">
                  <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" fill="#ED6368"/></svg>
                  Delete
                </button>
                <button class="secondary-btn">
                  <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z" fill="#5357B6"/></svg>
                  Edit
                </button>`)
            }
          </div>
        </div>
        <p class="comment-content">
          ${commentDetails?.replyingTo !== undefined ? `<span class="tagged">@${commentDetails?.replyingTo}</span>`: ''}
          ${content}
        </p>
      </div>
    </div>
  </div>
</div>`

  return commentElemetTemplate;
}

function createAddCommentFormComponent(
  currentUser, textareaId = "mainUserReplaycomment", 
  btnName = "Send", onClickHandler = 'addUserComment') {
  const {username, image} = currentUser;

  const formElement = `<form class="comment-form">
    <img src="${image.webp}" alt="image ${username}">
    <textarea id="${textareaId}" placeholder="Add comment" name="comment" required></textarea>
    <button 
      type="button" 
      class="primary-btn" 
      ${btnName.toLocaleLowerCase() === 'send' ? 'id="send"': ''}
      onclick="${onClickHandler}(${textareaId})"
    >
    ${btnName}</button>
  </form>`;

  return formElement;
}


const containerDiv = createElementWithClass('div', 'container');
document.body.appendChild(containerDiv);
const commentsDiv = document.createElement('div');
commentsDiv.setAttribute('id', 'comments');
// console.log(commentsDiv)
containerDiv.appendChild(commentsDiv);

for (let i = 0; i < comments.length; i++) {
  commentsDiv.innerHTML += createCommentComponent(comments[i], currentUser);
  if (comments[i].replies.length !== 0) {
    const repliesContainerDiv = createElementWithClass('div', 'replies-container');
    // document.getElementById(comments[i].user.username)
    for (let j = 0; j < comments[i].replies.length; j++) {
      repliesContainerDiv.innerHTML += createCommentComponent(comments[i].replies[j], currentUser);
    }
    commentsDiv.lastChild.appendChild(repliesContainerDiv);
  }
  
}

containerDiv.innerHTML += createAddCommentFormComponent(currentUser);

window.replayToComment = function (replayToCommentElement) {
  colseOpenedReplayCommentFormComponent();
  const replayCommentForm = replayToCommentElement.querySelector('.comment-form');
  if (replayCommentForm !== null){
    replayCommentForm.querySelector('textarea').focus();
    return;
  }

  const textareaId = `_${Math.floor(Math.random() * 10000)}`
  replayToCommentElement.querySelector('.comment-replay-container').innerHTML += createAddCommentFormComponent(currentUser, textareaId, "replay", 'addUserReplayComment')
  const textareaEle = replayToCommentElement.querySelector(`#${textareaId}`);
  console.log(textareaEle);
  textareaEle.value = `@${replayToCommentElement.getAttribute('id')}, `;
  textareaEle.focus();
}

window.addUserComment = function (targetTextareaElement) {
  console.log(targetTextareaElement)
  console.log('send:', targetTextareaElement.getAttribute('id'));
  const content = targetTextareaElement.value.trim();
  if(!content) {
    targetTextareaElement.focus();
    return;
  }
  console.log('send:', targetTextareaElement.value);
  const newUserCommentData = {
    id: genrateCommentId(),
    content,
    createdAt:'a moment ago',
    score: 0,
    user: currentUser,
    replies: []
  }
  console.log(newUserCommentData)
  comments.push(newUserCommentData);
  console.log(comments);
  document.getElementById('comments').innerHTML += createCommentComponent(newUserCommentData, currentUser);

  targetTextareaElement.value = '';
}

window.addUserReplayComment = function (tagetReplayTextareaElement) {
  console.log(tagetReplayTextareaElement);
  const textareaValue = tagetReplayTextareaElement.value.trim();
  const endOfTagIndex = textareaValue.indexOf(',');
  const replyingToTagUsername = textareaValue.slice(1, endOfTagIndex);
  const content = textareaValue.slice(endOfTagIndex+1).trimStart();
  console.log("textareaId.value:", tagetReplayTextareaElement.value)
  console.log("endOfTagIndex:", endOfTagIndex)
  console.log("replyingToTagUsername:", replyingToTagUsername)
  console.log("content:", content);

  if (!content) {
    tagetReplayTextareaElement.focus();
    return;
  }

  let repliesContainerDiv = document.querySelector(`#${replyingToTagUsername} .replies-container`); 
  if (!repliesContainerDiv) {
    // check if the current replay comment is replay to normal comments or replies commens.
    const isRepliesComment = document.querySelector(`#${replyingToTagUsername}`).parentElement.getAttribute('class') === 'replies-container';
    if (isRepliesComment){ // TODO: we can solve that by using the data attributes. by add data-is-replay-comment
      repliesContainerDiv = document.querySelector(`#${replyingToTagUsername}`).parentElement;
      console.log('repliesContainerDiv', repliesContainerDiv);
    }
    else {
      repliesContainerDiv = createElementWithClass('div', 'replies-container');
      document.querySelector(`#${replyingToTagUsername}`).appendChild(repliesContainerDiv);
      console.log('repliesContainerDiv', repliesContainerDiv);
    }
  }

  const newUserReplayCommentData = {
    id: genrateCommentId(),
    content,
    createdAt:'a moment ago',
    score: 0,
    replyingTo: replyingToTagUsername,
    user: currentUser
  }

  const mainCommentId = repliesContainerDiv.parentElement.dataset.commentId;
  // add the replay comment to main comment
  comments.forEach((comment) => {
    if (comment['id'] === +mainCommentId){
      comment['replies'].push(newUserReplayCommentData);
      return;
    }
  });

  repliesContainerDiv.innerHTML += createCommentComponent(newUserReplayCommentData, currentUser);

  // remove the comment component:
  document.getElementById(tagetReplayTextareaElement.getAttribute('id')).parentElement.remove();
}

window.toggleScore = function (id, action) {
  const targetCommentScoreElement = document.querySelector(`div[data-comment-id="${id}"] > .comment-replay-container .counter-container > p`)
  console.log(targetCommentScoreElement);//.counter-container > p
  console.log(id);
  console.log('score: ', +targetCommentScoreElement.innerText );
  let currentScore = +targetCommentScoreElement.innerText;
  const previousUserAction = targetCommentScoreElement.getAttribute('data-aready-scored');
  if (action === '+' && previousUserAction != action) {
    // //update the score of the comment the comments araay.
    targetCommentScoreElement.setAttribute('data-aready-scored', "+");
    // increment the Score counter UI.
    targetCommentScoreElement.innerText = ++currentScore;
  } else if (action === '-' && previousUserAction != action) {
    // //update the score of the comment the comments araay.
    targetCommentScoreElement.setAttribute('data-aready-scored', "-");
    // decrement the Score counter UI.

    // targetCommentScoreElement.innerText = currentScore !== 0 ? --currentScore : 0; //? to prevent score to be less than 0
    targetCommentScoreElement.innerText = --currentScore;
    } else {
    return;
  }

  // updata the score of comment data.
  comments.forEach((comment => {
    if(comment.id == id) {
      comment.score = currentScore;
      return;
    }
    comment.replies.forEach(replayComment => {
      if (replayComment.id == id) {
        replayComment.score = currentScore;
        return;
      }
    });
  }));
}

function genrateCommentId () { 
  let counter = 0
  for (let i = 0; i < comments.length; i++, counter++) {
    if (comments[i]?.replies !== undefined)
      for (let j = 0; j < comments[i].replies.length; j++, counter++) {}
  }
  return counter + 1;
}


function colseOpenedReplayCommentFormComponent() {
  const commentFromElement = document.querySelector(`#comments .comment-form`);
  if (commentFromElement)
    commentFromElement.remove();
}