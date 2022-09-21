<script lang="ts" setup>

</script>

<template>
  <div class="modal">
    <div class="modal-inner">
      <div class="modal-box">
        <div class="modal-content">
          <div class="top-title">
            Investigate Action
          </div>
          <div class="action-title">
            X
          </div>
          <div class="action-info">
            <div>
              <span>
                Duration:
              </span>
              <span>
                X
              </span>
            </div>
            <div>
              <span>
                Score:
              </span>
              <span>
                x
              </span>
            </div>
          </div>
          <div class="tag">
            <span>
              X
            </span>
          </div>
          <div class="desc">
            A IP with offensive actions has success login on Portal，please find out which account was compromised. Also providing the login time，attacker&#39;s IP.
          </div>
          <div class="notice">
            Notice: There may be more than one answer. You can submit any of it.
          </div>
          <div class="inp-group">
            <div>
              <div class="inp-title">
                Login Time
              </div>
              <div class="inp-sub">
                success login time
              </div>
              <input type="text">
            </div>
            <div>
              <div class="inp-title">
                Attacker
              </div>
              <div class="inp-sub">
                source ip address
              </div>
              <input type="text">
            </div>
            <div>
              <div class="inp-title">
                Username
              </div>
              <div class="inp-sub">
                login user name
              </div>
              <input type="text">
            </div>
          </div>
          <div class="send">
            <div class="send-btn">
              Submit
            </div>
          </div>
          <div class="close-btn">
            <div>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>